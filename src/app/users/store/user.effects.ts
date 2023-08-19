import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';

import * as userActions from './user.actions';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/usuario.model';



@Injectable()
export class UserEffects {

  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  loadUser$ = createEffect( () => this.actions$
    .pipe(
      ofType( userActions.loadUser ),
      mergeMap( ( action )=> this.usersService.getUsersById( action.id )
        .pipe(
          map( ( user: User ) => userActions.loadUserSucces({ user }) ),
          catchError( ( error ) =>  of( userActions.loadUserError({ payload: error } )) )
        ) )
    ));
}

