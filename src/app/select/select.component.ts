import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  selected!: string;

  @Output() sendOpt = new EventEmitter();

  onChange() {
    this.sendOpt.emit(this.selected);
  }
}
