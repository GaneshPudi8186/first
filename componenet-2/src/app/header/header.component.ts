import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() p:any
  @Input() c:any
  @Output() a=new EventEmitter()
  val:number=0;
  name="GANESH";
  Incre()
  {
    this.a.emit(this.val++)
    
  }
  Decre()
  {
    this.a.emit(this.val--)
    
  }
  Reset()
  {
    this.a.emit(this.val=0)
   
  }
}
