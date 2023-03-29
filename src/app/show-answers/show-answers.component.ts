import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-answers',
  templateUrl: './show-answers.component.html',
  styleUrls: ['./show-answers.component.css'],
})
export class ShowAnswersComponent {
  @Input() result: string = '';
}
