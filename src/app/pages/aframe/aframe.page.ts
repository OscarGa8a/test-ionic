import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aframe',
  templateUrl: './aframe.page.html',
  styleUrls: ['./aframe.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AframePage implements OnInit {

  posSphere = '1 2.25 -5';
  constructor() { }

  ngOnInit() {
  }

}
