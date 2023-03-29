import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  num1: number = 0;
  num2: number = 0;
  opt: string = '';
  result: number = 0;
  visibility: boolean = false;

  getNum1(event: any) {
    this.num1 = Number(event);
  }
  getNum2(event: any) {
    this.num2 = Number(event);
  }
  getOpt(event: any) {
    this.opt = event;
  }

  show(bool: boolean) {
    this.visibility = bool;
  }

  calc() {
    switch (this.opt.toLowerCase()) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case 'x':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      default:
        alert('Opção inválida');
    }
    this.show(true);
  }
}
