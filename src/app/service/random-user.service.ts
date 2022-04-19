import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";
import {Result} from "../interface/result";

@Injectable({
  providedIn: 'root'
})
export class randomUserService {

  public randomUser$: EventEmitter<User[]> = new EventEmitter<User[]>();


  constructor(private httClient: HttpClient ) { }

  private urlRandomPeople = 'https://randomuser.me/api/?results=10&nat=br'

  public getRandomPeople(){
    this.httClient.get<Result>(this.urlRandomPeople)
      .subscribe(payload => {
        return this.randomUser$.emit(payload.results);
      })
  }


}
