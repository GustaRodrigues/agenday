import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { ForgotModalComponent } from './forgot-modal/forgot-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  public userLogin: User = {};
  private loading: any;

  constructor(public modalController: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ForgotModalComponent,
      cssClass:'custom-modal-forgot'
    });
    return await modal.present();
  }

  async login() {
    await this.presentLoading();

    try {
      const user = await this.authService.login(this.userLogin);
      location.reload();
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();

    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  

}