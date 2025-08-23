import { Component, Input, OnInit } from '@angular/core';
import { GoogleLanguage } from '@vocably/model';

@Component({
  selector: 'app-detailed-explanation',
  templateUrl: './detailed-explanation.component.html',
  styleUrls: ['./detailed-explanation.component.scss'],
})
export class DetailedExplanationComponent implements OnInit {
  @Input() public sourceLanguage!: GoogleLanguage;
  @Input() public targetLanguage!: GoogleLanguage;

  constructor() {}

  ngOnInit(): void {}
}
