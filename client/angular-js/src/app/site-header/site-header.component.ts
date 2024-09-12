import { Component } from '@angular/core';
import { ProfileBoxContainerComponent } from '../profile-box-container/profile-box-container.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [ProfileBoxContainerComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {
  blockUserChange() {
    alert('Toffeechat V1 web users shall only use Toffeechat as the Guest user')
  }
}
