import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CragDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crag-details',
  templateUrl: 'crag-details.html'
})
export class CragDetailsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CragDetailsPage Page');
  }

}
