import { Component, HostListener } from '@angular/core';
import { MaterialModule } from './material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
