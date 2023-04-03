import { IPlanet } from './../../shared/interfaces/cardInterface';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-memory-game-page',
  templateUrl: './memory-game-page.component.html',
  styleUrls: ['./memory-game-page.component.scss'],
})
export class MemoryGamePageComponent {
  cont: number = 0;
  contWin: number = 0;
  planets: IPlanet[] = [];
  @Input() planetsNormal: IPlanet[] = [
    {
      id: 1,
      name: 'earth',
      img: 'assets/earth.svg',
      checked: false,
      selected: false
    },

    {
      id: 2,
      name: 'jupiter',
      img: 'assets/jupiter.svg',
      checked: false,
      selected: false
    },

    {
      id: 3,
      name: 'mars',
      img: 'assets/mars.svg',
      checked: false,
      selected: false
    },

    {
      id: 4,
      name: 'mercury',
      img: 'assets/mercury.svg',
      checked: false,
      selected: false
    },

    {
      id: 5,
      name: 'saturn',
      img: 'assets/saturn.svg',
      checked: false,
      selected: false
    },

    {
      id: 6,
      name: 'uranus',
      img: 'assets/uranus.svg',
      checked: false,
      selected: false
    },

    {
      id: 7,
      name: 'earth',
      img: 'assets/earth.svg',
      checked: false,
      selected: false
    },

    {
      id: 8,
      name: 'jupiter',
      img: 'assets/jupiter.svg',
      checked: false,
      selected: false
    },

    {
      id: 9,
      name: 'mars',
      img: 'assets/mars.svg',
      checked: false,
      selected: false
    },

    {
      id: 10,
      name: 'mercury',
      img: 'assets/mercury.svg',
      checked: false,
      selected: false
    },
    {
      id: 11,
      name: 'saturn',
      img: 'assets/saturn.svg',
      checked: false,
      selected: false
    },

    {
      id: 12,
      name: 'uranus',
      img: 'assets/uranus.svg',
      checked: false,
      selected: false
    }
  ];
  @Input() planetsRandom: IPlanet[] = this.planetsNormal.sort(()=> 0.5 - Math.random())

  public show(index: IPlanet){

    this.planets.push(index);
    index.selected = true;

    if(this.planets.length > 1 ){

      if(this.planets[0].name === this.planets[1].name){
        setTimeout(()=>{
          this.planets[0].checked = true;
          this.planets[1].checked = true;
          this.contWin++;
          if(this.contWin >= this.planetsNormal.length/2){
          alert("Has ganado!");
          }
        }, 500) 
      }
      setTimeout(()=>{
        this.planets[0].selected = false;
        this.planets[1].selected = false;
        this.planets.splice(0,2);
        this.cont++;
      },500);
    }
  }

  public reset(): void{
    for(let item of this.planetsNormal){
      item.selected = false;
      item.checked = false;
    }
    this.cont = 0;
    this.contWin = 0;
    this.planets.splice(0,10);
  }  
  
}