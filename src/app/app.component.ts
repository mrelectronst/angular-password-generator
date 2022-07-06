import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'passgenerator';

  password:string = '';
  passLength: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: string) {
    console.log(value);
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passLength = parsedValue;
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const numbers = '0123456789';
    const letters = 'qwertyuopasdfghjklizxcvbnm';
    const symbols = '!%&/()]}|[{^++%&';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let passGenerated = '';

    for(let i= 0; i<this.passLength; i++){
      const index = Math.floor(Math.random()*validChars.length);
      passGenerated += validChars[index];
    }

    this.password = passGenerated;
  }
}
