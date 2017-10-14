import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any = [];
  constructor(private _usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(
      data => {
        console.log("data : ", data);
        this.users = data;
        // this.users = JSON.parse(data);
        // console.log('parsed data : ', this.users);
      },
      error => {

      });
  }

  showUsersDetails(user: any) {
    localStorage.setItem('useriddetail', user.id);
    this.router.navigate(['/userstodo']);

  }

}
