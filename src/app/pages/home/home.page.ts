import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'game-controller-outline',
      name: 'VR',
      redirectTo: '/aframe'
    },
    {
      icon: 'camera-outline',
      name: 'AR',
      redirectTo: '/arjs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  message(m: string): void {
    console.log(m);
  }

}
