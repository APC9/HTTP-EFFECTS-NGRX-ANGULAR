import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/usuario.model';
import { usersState } from '../store/users.reducer';
import { loadUsers } from '../store/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public users: User[] = [];
  public isLoading!: boolean;
  public error!: any;
  private store = inject( Store<usersState> );


  ngOnInit(): void {
    this.store.select('Users').subscribe( ( {users, isLoading, error} ) => {
      this.isLoading = isLoading;
      this.users = users;
      this.error = error;
    });
    this.store.dispatch( loadUsers() )
  }
}
