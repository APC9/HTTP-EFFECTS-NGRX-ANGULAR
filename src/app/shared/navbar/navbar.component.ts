import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { Store } from '@ngrx/store';
import { userState } from 'src/app/users/store/user.reducer';
import { loadUser } from 'src/app/users/store/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();
  private router = inject(Router);
  private usersService = inject(UsersService);
  private store = inject( Store<userState> );

  ngOnInit(): void {

    this.debouncer.pipe(
      debounceTime(500),
    ).subscribe( id => {
      this.store.dispatch( loadUser({id}) )
      this.router.navigate(['/user', id]);
    })
  }

  searchs( id: string ) {
    if( id.length === 0 ) return;

    this.debouncer.next( id );
  }

}
