import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Example} from "../../models/example";
import {HomePage} from "../home/home";

/**
 * Generated class for the NewvaluesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newvalues',
  templateUrl: 'newvalues.html',
})
export class NewvaluesPage {

  //different verse, same as the first
  example: Example;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //oh, i see you've played knifey-spooney before
    this.example = this.navParams.get('example');
  }


  weAreDoneHere() {
    this.navCtrl.setRoot(HomePage);
  }

}
