import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;

  somar() {
    this.sum = this.num1 + this.num2;
    console.log(this.sum);
  }

  getNum1(event: any) {
    this.num1 = Number(event);
  }
  getNum2(event: any) {
    this.num2 = Number(event);
  }
}
