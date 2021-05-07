import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-arjs',
  templateUrl: './arjs.page.html',
  styleUrls: ['./arjs.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArjsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('inicio ar');
  }

}
