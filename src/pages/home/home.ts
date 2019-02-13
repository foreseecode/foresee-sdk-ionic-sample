import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onSuccess(data) {
    console.log("Succcess. Data: " + data);
  }

  onFailure(data) {
    console.log("Failure. Data: " + data);
  }

  incrementSignificantEvent() {
    cordova.plugins.ForeSeeAPI.incrementSignificantEventCount(['sig_event_test'], this.onSuccess, this.onFailure)
  }

  checkEligibility() {
    cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onFailure)
  }

  resetState() {
    cordova.plugins.ForeSeeAPI.resetState(this.onSuccess, this.onFailure)
  }
}
