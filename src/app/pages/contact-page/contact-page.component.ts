import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  contactForm: FormGroup;
  isSubmit: boolean = false;
  constructor(private formBuilder: FormBuilder){

    this.contactForm = this.formBuilder.group({
      email: ["pepe@pepe.com", [Validators.required, Validators.email]],
      name: ["", [Validators.required, Validators.minLength(6),  Validators.maxLength(18)]],
      age: [0, Validators.required],
      description: ["", [Validators.required, Validators.minLength(4)]]
    })
  }

  submit() {
      console.log(this.contactForm);
      this.isSubmit = true;
      if(this.contactForm.status === "VALID"){
        console.log(this.contactForm.value);
        console.log(this.contactForm);
      }
  }
}
