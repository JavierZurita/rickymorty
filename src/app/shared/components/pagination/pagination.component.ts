import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() newPage = new EventEmitter;

  page: number = 1;

  changePage(newPage: number){
    this.page = newPage;
    this.newPage.emit(this.page);
  }

}
