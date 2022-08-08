import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const url: string = 'http://localhost:9000/addFriend';


@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http: HttpClient) { }

  addFriend(friend: any) {
    console.log('add friend', friend);
    this.http.post(url, friend).subscribe(res => {
      console.log('repsonse', res);
    });
  }
}
