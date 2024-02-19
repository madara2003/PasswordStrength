import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() inputValueChange = new EventEmitter<string>();
  inputVal:string = ''
  
  public getCurrentValue(val:string) {
   this.inputVal = val
   this.inputValueChange.emit(this.inputVal);
  }


}
