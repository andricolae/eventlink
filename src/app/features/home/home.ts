import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../../shared/components/header/material.module';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  showScrollToTop = false;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.pageYOffset > 300;
  }

  onCreateEvent() {
    console.log('Create event clicked');
  }

  onSeeHowItWorks() {
    console.log('See how it works clicked');
    this.scrollToFeatures();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private scrollToFeatures() {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
