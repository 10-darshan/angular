import { Component } from '@angular/core';
import { trigger, state, style, animation, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animations',[
      state('small',style({
        transform :'scale(1)',
      })),
      state('large',style({
        transform: 'scale(2)',
      })),
      transition('small<=>large',animate('5000ms ease-in-out'))
    ]            
   )]
})
export class AppComponent {
  title = 'demo';
  cur_state:string="small";
  animate(){
    this.cur_state=this.cur_state==='small'?'large':'small';
  }
}
