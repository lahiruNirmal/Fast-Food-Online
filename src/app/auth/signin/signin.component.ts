import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  @ViewChild('f') signInForm: NgForm;
  authSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      this.authSubscription = this.authService.varIsAuthenticated.subscribe(
      next => {
        if (next == true){
          this.router.navigate['home'];
        }
      }
    );
    console.log(this.authService.varIsAuthenticated);
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signinUser(email, password);
  }

  gotoSignUp(){
    this.router.navigate(['/signup']);
  }

}
