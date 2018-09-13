import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Example} from "../../models/example";
import {StartPage} from "../start/start";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //we need an Example object
  example: Example;

  constructor(public navCtrl: NavController) {

    //an init is needed here since it's currently an undefined object. without this, you'll get 'undefined' errors when setting
    this.example = new Example();

    //here we will set the initial values of the example item
    this.example.someBoolean = true;
    this.example.someNumber = 7;
    this.example.someString = "I got new records in the mail";
    this.example.someotherstring = "Maybe I ordered too many";

  }


  letsGo() {
    //now we pass the entire object to the next page
    this.navCtrl.push(StartPage, {example: this.example});
  }

}
