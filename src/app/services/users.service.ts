import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  constructor() { }

  getUsers(){
    return this.http.get(`${this.baseUrl}?per_page=6&delay=4`)
    .pipe(
      map( (resp: any) => resp["data"])
    );
  }

  getUsersById(id:string){
    return this.http.get(`${this.baseUrl}/${id}`)
    .pipe(
      map( (resp: any) => resp["data"])
    );
  }
}
