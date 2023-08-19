import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'user/:id', component: UserComponent},
  { path: 'list', component: ListComponent},
  { path: '**', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
