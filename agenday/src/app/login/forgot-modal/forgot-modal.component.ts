import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-modal',
  templateUrl: './forgot-modal.component.html',
  styleUrls: ['./forgot-modal.component.scss'],
})
export class ForgotModalComponent implements OnInit {

  constructor( private modalController: ModalController) {
  }

 ngOnInit() {}

 close() {
   this.modalController.dismiss();
 }
}
