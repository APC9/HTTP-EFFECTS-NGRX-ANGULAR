import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from 'src/app/models/usuario.model';
import { userState } from '../store/user.reducer';
import { loadUser } from '../store/user.actions';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  private router = inject( ActivatedRoute );

  public user!: User;
  public isLoading!: boolean;
  public error!: any;
  private store = inject( Store<userState> );

  ngOnInit(): void {
    this.store.select('User')
    .pipe(
      filter( user => user !== null )
    ).subscribe( (user) => {
      this.user = user.user;
      this.error = user.error;
      this.isLoading = user.isLoading;
    })
  }

}
