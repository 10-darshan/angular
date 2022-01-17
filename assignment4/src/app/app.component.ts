import { Component } from '@angular/core';
import { trigger, state, style, query, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('div1',[
      state('*',style({ opacity:1, color: 'green', fontSize:'25px'})),
      state('void',style({ opacity:0, color: 'blue', fontSize:'25px'})),
      transition(':enter', animate('3s 2s ease-in')),
      transition(':leave', animate('3s 6s ease-out'))
    ]),
    trigger('div2',[
      state('*',style({ opacity:1, color: 'blue', fontSize:'25px'})),
      state('void',style({ opacity:0, color: 'red', fontSize:'25px'})),
      transition(':enter', animate('3s 4s ease-in')),
      transition(':leave', animate('3s 4s ease-out'))
    ]),
    trigger('div3',[
      state('*',style({ opacity:1, color: 'red', fontSize:'25px'})),
      state('void',style({ opacity:0, color: 'green', fontSize:'25px'})),
      transition(':enter', animate('3s 6s ease-in')),
      transition(':leave', animate('3s 2s ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'demo';
  isShown:boolean = true;

  onAnimationEvent(event:Event){
    this.isShown=false;
  }
}
