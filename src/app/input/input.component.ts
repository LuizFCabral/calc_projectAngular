import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  value!: number;

  @Output() sendValue = new EventEmitter();

  onChange() {
    this.sendValue.emit(this.value);
  }
}
