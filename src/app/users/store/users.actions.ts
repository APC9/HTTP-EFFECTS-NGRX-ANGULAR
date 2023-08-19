import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/usuario.model';


export const loadUsers = createAction( '[Users Component] Load Users' );

export const loadUsersSucces = createAction(
  '[Users Component] Load Users Succes',
  props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[Users Component] Load Users Error',
  props<{ payload: any }>()
);

