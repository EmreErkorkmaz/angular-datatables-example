import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import countriesData from '../../../dummyUserData/countries';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UsersService]
})
export class EditComponent implements OnInit {
  countries: string [] = [];

  activeId: any;
  user: {id: number, name: string, surname: string, birthDate: string, country: string, adress: string, phoneNumber: string} | any = {};

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.activeId = this.route.snapshot.params['id']
    this.user = this.usersService.users.find(user => user.id == this.activeId);
    if(!this.user){
      this.router.navigate(['/']);
    }
    this.user.birthDate = this.user.birthDate.split('-').reverse().join('-');
    this.countries = countriesData;
  }
  editNewUser(form: NgForm){
    console.log(form);
    const { name, surname, birthday, country, adress, phone } = form.value;
    const birthdate = birthday.split('-').reverse().join('-');
    const phoneNumber = phone.replace(/(\d{2})(\d{2})(\d{3})(\d{3})/, "$3-$3-$2-$2");
    console.log(birthdate, phoneNumber);
    this.usersService.editUser(this.user.id, name, surname, birthdate, country, adress, phoneNumber);
    this.router.navigate(['/']);
  }
}
