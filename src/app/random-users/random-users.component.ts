import { Component, OnInit } from '@angular/core';
import {User} from "../interface/user";
import {randomUserService} from "../service/random-user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.scss']
})
export class RandomUsersComponent implements OnInit {

  public users: User[] = [];
  public loading = false;
  public that = this;

  public showSpinner = false;
  public buttonLoading = false;


  constructor(private randomUserService: randomUserService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.randomUserService.getRandomPeople();
    this.randomUserService.randomUser$.subscribe(users => {
      this.users.push(...users);
    });
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false
      this.buttonLoading = false;
    }, 2000)
  }

  newUsers(){
    this.buttonLoading = true;
    this.loadData()
    setTimeout(() =>{
      this.randomUserService.getRandomPeople()
    },2000)
    this.toaster.info('10 usuarios adicionados com sucesso!', 'Sucesso', {
      timeOut: 4000,
    })
  }

  deleteUsers(){
    this.buttonLoading = true;
    this.loadData()

   setTimeout(() =>{
     this.users = this.users.slice(0,this.users.length - 10);
   },2000)

    this.toaster.info('10 usuarios removidos com sucesso!', 'Sucesso', {
      timeOut: 4000,
    })



  }



}
