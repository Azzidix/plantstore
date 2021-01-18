import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;
  isLoading = false;
  @ViewChild('f', { static: true }) form: NgForm;

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLogin() {
    if (!this.form.valid) {
      return;
    }

    this.authService.login(this.form.value.email, this.form.value.password);
    this.isLoading = true;
    // console.log(this.form.value);
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then((loadingEl) => {
        loadingEl.present();
        setTimeout(() => {
          if (this.authService.userIsAuthenticated) {
            console.log('Autenticated');
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/home');
          } else {
            console.log('Not Autenticated');
            this.isLoading = false;
            loadingEl.dismiss();
          }
        }, 1000);
      });
  }

  onSignUp() {}

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
