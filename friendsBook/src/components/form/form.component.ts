import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  languages: string[] = ['html', 'css', 'javaScript', 'php', 'typeScript'];

  constructor() { }

  ngOnInit(): void {
  }

}
