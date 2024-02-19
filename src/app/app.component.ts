import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Check Password Strength Application"
  result:number = 0;
 
  
  public inputData(event: string):void {
    let res = 0;
    let eventLength = event.length
    
    let hasDigit = false
    let hasLetter = false
    let hasSymbol = false
    for(let i = 0; i < eventLength ; i++) {
      
      let isDigit = !isNaN(parseInt(event[i]))
      let isLetter = /[a-zA-Z]/.test(event[i])
      let isSymbol = /[^\w\s]/.test(event[i])
  
      if (isDigit) {
       hasDigit = true
      }else if(isLetter){
       hasLetter = true
      }else if(isSymbol) {
       hasSymbol = true
      }
    }
    
    if(eventLength === 0) {
      res = 0
    }else if (eventLength < 8) {
      res = 1
    }else if (eventLength > 7 && (hasLetter && hasDigit && hasSymbol)) {
      res = 2
    }else if(eventLength > 7 && ((hasDigit && hasLetter) || (hasLetter && hasSymbol ) || (hasDigit && hasSymbol)))   {
      res = 3
    }else if (eventLength > 7 && (hasDigit || hasLetter  || hasSymbol) ) {
      res = 4
    }
    this.result = res 
    
    // letters-symbols/letters-digits/digits-symbols
  }
}
