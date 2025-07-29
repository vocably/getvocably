import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-extension',
  templateUrl: './ios-extension.component.html',
  styleUrls: ['./ios-extension.component.scss'],
})
export class IosExtensionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    location.href = 'https://vocably.pro/ios-safari-extension.html';
  }
}
