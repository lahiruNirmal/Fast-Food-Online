import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    token: string;
    varIsAuthenticated = new Subject<boolean>();

    constructor(private router: Router){}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.signinUser(email, password);
                }
            )
            .catch(
                error => console.log(error)

            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/home']);
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    )
                }
            )
            .catch(
                error => console.log(error)
            );

            if (this.isAuthenticated){
                return true;
              }else{
                  return false;
              }
    }

    onLogOut(){
        firebase.auth().signOut()
            .then(
                response => {
                    this.varIsAuthenticated.next(false);
                    this.router.navigate(['/signin']);
                }
            );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    this.token = token;
                    if(token != null)
                        this.varIsAuthenticated.next(true);
                    else
                        this.varIsAuthenticated.next(false);
                }
            );
        return this.token;
    }

    isAuthenticated(){
        return this.getToken() != null;
    }

}