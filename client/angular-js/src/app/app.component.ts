import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteLeftBodyComponent } from './site-left-body/site-left-body.component';
import { SiteMiddleBodyComponent } from './site-middle-body/site-middle-body.component';
import { SiteRightBodyComponent } from './site-right-body/site-right-body.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SiteHeaderComponent,SiteLeftBodyComponent,SiteMiddleBodyComponent,SiteRightBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-js';
}
