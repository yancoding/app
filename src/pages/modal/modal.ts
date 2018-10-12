import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
  url: String;
  constructor(
    public navCtrl: NavController,
    public params: NavParams
    ) {
    this.url = params.get("url");
    console.log(this.url);
  }
  ionViewDidLoad(){

  }

}
