import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as usersActions from './users.actions';
import { UsersService } from '../../services/users.service';


@Injectable()
export class UsersEffects {

  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  loadUsers$ = createEffect( () => this.actions$
    .pipe(
      ofType( usersActions.loadUsers ),
      mergeMap( ()=> this.usersService.getUsers()
        .pipe(
          map( ( users ) => usersActions.loadUsersSucces({ users }) ),
          catchError( ( error ) =>  of( usersActions.loadUsersError({ payload: error } )) )
        ) )
    ));
}

