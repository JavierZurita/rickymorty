import { CharactersService } from 'src/app/shared/services/characters.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Output() newPage = new EventEmitter;
  @Input() characters: any;
  constructor(private characterService:CharactersService){}

  getPage(actualPage:number){
    console.log("Gallery",actualPage);
    this.newPage.emit(actualPage);
  }

}
