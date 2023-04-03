import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  @Input() characters: any;

  page: number = 1;

  constructor(private charactersService: CharactersService){}

  getPage(newPage:number){
    this.page = newPage;
    
    this.charactersService.getCharacters(this.page).subscribe((res: any) =>{
      console.log(res);
      this.characters = res.results;
    });    
  }

  ngOnInit(): void {
    
    this.charactersService.getCharacters(this.page).subscribe((res: any) =>{
      console.log(res);
      this.characters = res.results;
    });   
  }
}
