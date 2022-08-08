import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddFriendService} from "../../app/services/add-friend.service";
import {Friend} from "../../app/models/friend";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []


})
export class FormComponent implements OnInit {
  languages: string[] = ['html', 'css', 'javaScript', 'php', 'typeScript'];

  friendsForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(((\\+|00)32[ ]?(?:\\(0\\)[ ]?)?)|0){1}(4(60|[789]\\d)\\/?(\\s?\\d{2}\\.?){2}(\\s?\\d{2})|(\\d\\/?\\s?\\d{3}|\\d{2}\\/?\\s?\\d{2})(\\.?\\s?\\d{2}){2})$')]),
    favouriteLanguage: new FormControl(''),
  });

  constructor(private addFriendService: AddFriendService) {
  }

  ngOnInit(): void {

  }

  showInvalid(field: string): boolean {
    return !!(this.friendsForm?.get(field)?.invalid && (this.friendsForm?.get(field)?.dirty || this.friendsForm?.get(field)?.touched));
  }

  addFriend() {
    console.log('add friend');
    const friend: Friend = new Friend(
      this.friendsForm.get('firstName')?.value,
      this.friendsForm.get('lastName')?.value,
      this.friendsForm.get('email')?.value,
      this.friendsForm.get('phone')?.value,
      this.friendsForm.get('favouriteLanguage')?.value,
    );
    this.addFriendService.addFriend(friend);
  }


}
