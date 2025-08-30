import { Component, Input, OnInit } from '@angular/core';
import { GoogleLanguage } from '@vocably/model';
import posthog from 'posthog-js';

@Component({
  selector: 'app-how-to-video',
  templateUrl: './how-to-video.component.html',
  styleUrls: ['./how-to-video.component.scss'],
})
export class HowToVideoComponent implements OnInit {
  @Input() public targetLanguage!: GoogleLanguage;

  public videoLanguage: 'en' | 'ru' | 'uk' | 'tr' = 'en';

  constructor() {}

  ngOnInit(): void {
    switch (this.targetLanguage) {
      case 'ru':
        this.videoLanguage = 'ru';
        break;
      case 'uk':
        this.videoLanguage = 'uk';
        break;
      case 'tr':
        this.videoLanguage = 'tr';
        break;
      default:
        this.videoLanguage = 'en';
    }
  }

  onPlay() {
    posthog.capture('play_video');
  }
}
