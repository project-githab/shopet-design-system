import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NgClass
  ],
  styleUrl: './app.css'
})
export class App {

  // Добавить или отнять--------------------
  quantity: number = 1;
  inputNumberValue: number = 10;


  add(): void {
    this.quantity += 1;
    this.inputNumberValue = this.quantity;
  }

  delete(): void {
    this.quantity -= 1;
    this.inputNumberValue = this.quantity;
  }

  // Добавить или отнять--------------------


  // checkbox--------------------
  isCheckbox = false

  clickCheckbox() {
    this.isCheckbox = !this.isCheckbox;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
      this.clickCheckbox();
    }
  }

  // checkbox--------------------




  // Robot--------------------



  isCheckboxR = false
  closeBox = false
  radioWaveEffect = false
  isLoadCheckedRobot = false

  clickCheckboxR() {
    this.closeBox = true
    this.radioWaveEffect = true
    this.isCheckboxR = !this.isCheckboxR;

    setTimeout(() => {
      this.isLoadCheckedRobot = true
      this.radioWaveEffect = false
    }, 500)

  }


  handleKeydownR(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
      this.clickCheckboxR();
    }
  }


  // Robot--------------------

}
