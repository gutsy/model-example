import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Example} from "../../models/example";
import {NewvaluesPage} from "../newvalues/newvalues";

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  //we know we're getting an Example object, so we type it as such
  example: Example;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //first, we pull the example from nav params
    this.example = this.navParams.get('example'); //keep it simple and keep the params and vars the same name to avoid confusion

    //just for poops and laughs we'll assign the value of the object to the last param defined in the model
    this.example.somethingElseEntirely = this.example;
  }

  changeValuesAndMoveOn() {
    this.example.someString = "My wife wants me to stop buying so many records";
    this.example.someotherstring = "But then I won't be able to fill the dark hole in my soul";
    this.example.someNumber = this.example.someNumber + 20; //why not, right?
    this.example.someBoolean = !this.example.someBoolean; //more funner than just typing false or whatever

    this.navCtrl.push(NewvaluesPage, {example: this.example});

  }

}
