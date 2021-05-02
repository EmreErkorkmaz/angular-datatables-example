import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsersService]
})
export class HomeComponent implements OnInit {
  users: {id: number, name: string, surname: string, birthDate: string, country: string, adress: string, phoneNumber: string} [] = [];
  
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true,
      // order: [[0, 'asc']],
    }
    this.users = this.usersService.users;
  }

  editUser(id: number){
    this.router.navigate(['/edit', id]);
  }

}
