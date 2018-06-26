import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodService } from './food-service';
import { FoodModel } from './food-model';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Fast Food Online';
  authSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDQD7ZZ8LDuYBfMuVuMaVkTbI8wAzcabNo",
      authDomain: "fast-food-online.firebaseapp.com",
      databaseURL: "https://fast-food-online.firebaseio.com",
      projectId: "fast-food-online",
      storageBucket: "fast-food-online.appspot.com",
      messagingSenderId: "839732055993"
    });

    this.authSubscription = this.authService.varIsAuthenticated.subscribe(
      next => {
        if (next == true){
          this.router.navigate['/home'];
        }
        else
          this.router.navigate['/signin'];
      }
    );
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

}
