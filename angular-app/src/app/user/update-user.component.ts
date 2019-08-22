import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;

constructor(private router: Router, private userService: UserService) {
}

  ngOnInit() {
    this.user=history.state;
}

updateUser(user: User): void {
  this.userService.updateUser(user)
    .subscribe( data => {
      this.router.navigateByUrl('/users')
    })
};

}
