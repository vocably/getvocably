import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CustomerInfo,
  EntitlementInfo,
  Purchases,
} from '@revenuecat/purchases-js';
import { startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';

type MembershipStatus =
  | {
      type: 'loading';
    }
  | {
      type: 'free';
    }
  | {
      type: 'paid_group';
    }
  | {
      type: 'revenue_cat';
      customerInfo: CustomerInfo;
      entitlementInfo: EntitlementInfo;
    }
  | {
      type: 'error';
    };

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public membershipStatus: MembershipStatus = {
    type: 'loading',
  };

  public reload$ = new Subject<'with_loader' | 'without_loader'>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.reload$
      .pipe(
        startWith('with_loader'),
        tap(() => {
          this.membershipStatus = {
            type: 'loading',
          };
        }),
        switchMap(() => {
          return this.authService.fetchUserData$.pipe(
            switchMap((userData) => {
              const purchases = Purchases.configure(
                'rcb_npVnGSbfiQAcvvQkQxFrIEiGibAJ',
                userData.email
              );
              return Promise.all([
                this.authService.isPaidGroup(),
                purchases.getCustomerInfo(),
              ]);
            })
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: ([isPaidGroup, customerInfo]) => {
          if (customerInfo.entitlements.active['premium']) {
            this.membershipStatus = {
              type: 'revenue_cat',
              customerInfo,
              entitlementInfo: customerInfo.entitlements.active['premium'],
            };

            return;
          } else if (isPaidGroup) {
            this.membershipStatus = {
              type: 'paid_group',
            };
          } else {
            this.membershipStatus = {
              type: 'free',
            };
          }
        },
        error: () => {
          this.membershipStatus = {
            type: 'error',
          };
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
