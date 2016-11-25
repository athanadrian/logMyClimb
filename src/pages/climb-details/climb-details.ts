import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ClimbDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-climb-details',
  templateUrl: 'climb-details.html'
})
export class ClimbDetailsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ClimbDetailsPage Page');
  }

}
