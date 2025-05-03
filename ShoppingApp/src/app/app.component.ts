import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {} from '@angular/common/http';

import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    SignupComponent,
    RouterModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private imgixBaseUrl = 'assets/backgroundImgHome.jpg';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // Setting background on the body element directly
    console.log('Background image');
    this.renderer.setStyle(
      document.body,
      'backgroundImage',
      `url(${this.imgixBaseUrl})`
    );

    this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
    this.renderer.setStyle(document.body, 'backgroundRepeat', 'no-repeat');
  }

  title = 'ShoppingApp';
}
