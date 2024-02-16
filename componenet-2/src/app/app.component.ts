import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componenet-2';
  Count=0;
  btn:any
 color="";
 s=0;
 @Input() a:any
 fun(e:any)
 {

  this.s=e;
 }
 g(e:Event)
 {
  this.btn = e.target as HTMLButtonElement
this.color=this.btn.value;
 }

  Incre()
  {
    this.Count++;
  }
  Decre()
  {
    this.Count--;
  }
  Reset()
  {
    this.Count=0;
  }
}
