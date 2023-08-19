import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () => import('./users/users.module').then( m => UsersModule )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
