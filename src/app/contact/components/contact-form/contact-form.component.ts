import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.contactForm  = new FormGroup({
      name: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'submit',
      }),
      message: new FormControl('', {
        updateOn: 'submit',
      }),
    });
  }

  onSubmit() {
    return false;
  }

}
