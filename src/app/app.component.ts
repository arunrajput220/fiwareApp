import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'home'
    },
    
    {
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'IoT Platform Supported',
      url: '/iotplatforms',
      icon: 'pulse'
    },
    {
      title: 'About Developer',
      url: '/about',
      icon: 'skull'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'build'
    }
  ];
  public labels = [];
  constructor() {}
}
