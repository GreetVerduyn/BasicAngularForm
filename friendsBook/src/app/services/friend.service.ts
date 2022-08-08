import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "../models/friend";
import {Observable} from "rxjs";

const url: string = 'http://localhost:9000/addFriend';
const urlget: string = 'http://localhost:9000/allFriends';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }

  addFriend(friend: Friend) {
    console.log('add friend', friend);
    this.http.post(url, friend).subscribe(res => {
      console.log('repsonse', res);
    });
  }

  getFriends(): Observable<any> {
    return this.http.get(urlget);
  }
 }
