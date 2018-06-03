import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { ConversationsPage } from '../conversations/conversations';
import { DemandesPage } from '../demandes/demandes';
import { RadarPage } from '../radar/radar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToProfil() {
    	this.navCtrl.push(ProfilPage);
  }

	goToRadar() {
    	this.navCtrl.push(RadarPage);
  }

	goToDemandes() {
    	this.navCtrl.push(DemandesPage);
  }

  goToMessages() {
    	this.navCtrl.push(ConversationsPage);
  }


}
