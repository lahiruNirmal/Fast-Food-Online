import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  tokenStatus: boolean;
  sub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.sub = this.authService.varIsAuthenticated.subscribe(
      (next) => {
        if(next == true)
          this.tokenStatus = true;
        else
          this.tokenStatus = false;
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
