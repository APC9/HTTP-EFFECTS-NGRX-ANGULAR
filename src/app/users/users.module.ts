import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';
import { UsersEffects } from './store/users.effects';

import { usersReducer } from './store/users.reducer';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';


@NgModule({
  declarations: [
    UserComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature( 'Users', usersReducer),
    StoreModule.forFeature( 'User', userReducer),
    EffectsModule.forFeature( UsersEffects ),
    EffectsModule.forFeature( UserEffects ),
  ]
})
export class UsersModule { }
