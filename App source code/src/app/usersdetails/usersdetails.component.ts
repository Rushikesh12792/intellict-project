import { Component, OnInit } from '@angular/core';
import { UsersdetailsService } from './userdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {
  userId: number;
  usertodos : any;
  constructor(private _usersdetailsService : UsersdetailsService, private router: Router) { }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('useriddetail'));

    this._usersdetailsService.getUsersDetails(this.userId)
    .subscribe(
      data => {
        this.usertodos = data;
        console.log( data);
      },
      error =>
      {

      }
    )

  }

  addnewTodo(){
    var title = (<HTMLInputElement>document.getElementById('InputTodo')).value;
    console.log('called add new todo');
    this._usersdetailsService.addNewTodo(this.userId, title)
    .subscribe(
      data => {
        
        this.usertodos.push(data);
        console.log( 'added')
      },
      error => {

      }
    )
  }

  changeStatus(event, todo) {
    var completed ;
    if (event.target.checked) {
      for(let i = 0; i < this.usertodos.length; i++) {
        if(this.usertodos[i].id == todo.id){
          this.usertodos[i].completed = true;
          completed = true;
        }
      }
    }
    else {
      for(let i = 0; i < this.usertodos.length; i++) {

        if(this.usertodos[i].id == todo.id)
        {
          this.usertodos[i].completed = false;
          completed = false;
        }
      }
    }

    this._usersdetailsService.updateTodo(todo.id, completed)
    .subscribe(
      data => {
        console.log(' Updated backend');
      },
      error => {

      }
    )
  }

}
