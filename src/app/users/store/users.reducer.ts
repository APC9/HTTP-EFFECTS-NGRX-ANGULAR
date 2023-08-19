import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSucces } from './users.actions';
import { User } from 'src/app/models/usuario.model';

export interface usersState{
  users: User[],
  loaded: boolean,
  isLoading: boolean,
  error: any
}

export const initialState: usersState = {
  users: [],
  loaded: false,
  isLoading: false,
  error: null
}


const _usersReducer = createReducer(
  initialState,
  on( loadUsers, (state) => ({ ...state, isLoading: true }) ),
  on( loadUsersSucces, (state, { users } ) => ({
    ...state,
    isLoading: false,
    loaded: true,
    users: [ ...users ]
    })
  ),
  on( loadUsersError, (state, { payload } ) => ({
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

export function usersReducer(state: usersState | undefined, action: Action) {
  return _usersReducer(state, action);
};


