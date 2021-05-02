import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import countriesData from '../../../dummyUserData/countries';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [UsersService]
})
export class NewComponent implements OnInit {

  countries: string [] = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.countries = countriesData;
  }

  addNewUser(form: NgForm){
    console.log(form);
    const { name, surname, birthday, country, adress, phone } = form.value;
    const birthdate = birthday.split('-').reverse().join('-');
    const phoneNumber = phone.replace(/(\d{2})(\d{2})(\d{3})(\d{3})/, "$3-$3-$2-$2");
    console.log(birthdate, phoneNumber);
    this.usersService.addUser(name, surname, birthdate, country, adress, phoneNumber);
    this.router.navigate(['/']);
  }

}
