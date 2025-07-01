import { Component, OnDestroy, OnInit } from '@angular/core';
import { getPaddleInstance } from '@paddle/paddle-js';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { SubscriptionProduct } from '../../../subscription-products';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  onSelect(product: SubscriptionProduct) {
    this.authService.fetchUserData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((userData) => {
        const paddleInstance = getPaddleInstance();
        if (!paddleInstance) {
          console.error('No paddle instance');
          return;
        }
        paddleInstance.Checkout.open({
          items: [
            {
              priceId: product.priceId,
            },
          ],
          customer: {
            email: userData.email,
          },
          customData: {
            revenue_cat_id: userData.email,
          },
          settings: {
            successUrl:
              location.origin + `/subscribe/success/${product.priceId}`,
          },
        });
      });
  }
}
