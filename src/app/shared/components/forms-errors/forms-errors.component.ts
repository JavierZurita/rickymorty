import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms-errors',
  templateUrl: './forms-errors.component.html',
  styleUrls: ['./forms-errors.component.scss']
})
export class FormsErrorsComponent {
  @Input() key: string = "";
  @Input() controls: any;
}
