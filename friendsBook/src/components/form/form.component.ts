import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})
export class FormComponent implements OnInit {
  languages: string[] = ['html', 'css', 'javaScript', 'php', 'typeScript'];

  friendsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl(''),
    favouritLanguage: new FormControl(''),
  });

  ngOnInit(): void {
  }

}
