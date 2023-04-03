import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaServiceService {

  text: string = "Soy un dato compartido"

  constructor() { }

  setText(newValue: string) {
    this.text = newValue;
  }
  getText(){
    return this.text;
  }
}
