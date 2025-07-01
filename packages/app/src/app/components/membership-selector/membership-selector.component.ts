import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  SubscriptionProduct,
  subscriptionProducts,
} from '../../subscription-products';

@Component({
  selector: 'app-membership-selector',
  templateUrl: './membership-selector.component.html',
  styleUrls: ['./membership-selector.component.scss'],
})
export class MembershipSelectorComponent implements OnInit {
  subscriptionProducts = subscriptionProducts;

  @Output() select = new EventEmitter<SubscriptionProduct>();
  constructor() {}

  ngOnInit(): void {}
}
