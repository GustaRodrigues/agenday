import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForgotModalComponent } from './forgot-modal/forgot-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ForgotModalComponent,
      cssClass:'custom-modal-forgot'
    })
    return await modal.present();
  }


}
