import { Injectable } from '@angular/core';
import data from '../dummyUserData/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = data;

  addUser(name: string, surname: string, birthDate: string, country: string, adress: string, phoneNumber: string){
    this.users.push({
      id: this.users.length + 1,
      name,
      surname,
      birthDate,
      country,
      adress,
      phoneNumber
    })
  }
  editUser(id: number, name: string, surname: string, birthDate: string, country: string, adress: string, phoneNumber: string){
    const index = this.users.findIndex(user => user.id == id);
    this.users[index] = {
      id,
      name,
      surname,
      birthDate,
      country,
      adress,
      phoneNumber
    }
  }
  constructor() { }
}
