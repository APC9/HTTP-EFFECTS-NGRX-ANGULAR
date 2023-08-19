import { Action, createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSucces } from './user.actions';
import { User } from 'src/app/models/usuario.model';

export interface userState{
  id: string | null,
  user: User,
  loaded: boolean,
  isLoading: boolean,
  error: any
}

export const initialState: userState = {
  id: null,
  user: {} as User,
  loaded: false,
  isLoading: false,
  error: null
}


const _userReducer = createReducer(
  initialState,
  on( loadUser, (state, { id }) => ({
    ...state,
    isLoading: true,
    id,
  }) ),

  on( loadUserSucces, (state, { user } ) => ({
    ...state,
    isLoading: false,
    loaded: true,
    user: {...user}
    })
  ),
  on( loadUserError, (state, { payload } ) => ({
    ...state,
    isLoading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
    })
  ),
);

export function userReducer(state: userState | undefined, action: Action) {
  return _userReducer(state, action);
};


