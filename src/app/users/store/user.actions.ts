import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/usuario.model';


export const loadUser = createAction(
  '[User Component] Load User',
  props<{ id: string }>()
);

export const loadUserSucces = createAction(
  '[User Component] Load User Succes',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User Component] Load User Error',
  props<{ payload: any }>()
);

