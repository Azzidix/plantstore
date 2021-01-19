import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

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
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    if (this.authService.userIsAuthenticated == true) {
      this.router.navigateByUrl('/home');
    }
  }

  onLogin() {
    if (!this.form.valid) {
      return;
    }

    this.authService.login(this.form.value.email, this.form.value.password);
    this.isLoading = true;
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
            this.isLoading = false;
            loadingEl.dismiss();
            this.alertCtrl
              .create({
                header: 'Login Failed!',
                message: 'Email or Password not match',
                buttons: [
                  {
                    text: 'Close',
                    role: 'cancel',
                  },
                ],
              })
              .then((e) => {
                e.present();
              });
            console.log('Not Autenticated');
          }
        }, 1000);
      });
  }

  onSignUp() {}

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
