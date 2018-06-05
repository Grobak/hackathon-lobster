import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthPage } from '../auth/auth';

//import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user/user.model';
import { UserListService } from '../../services/user-list.service';
 
/**
 * Generated class for the AddMember2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-member2',
  templateUrl: 'add-member2.html',
})
export class AddMember2Page {

  user: User = {
    pseudo: '0',
    sexe: '0',
    birth: '0',
    mail: '0',
    password: '0',
    password2: '0',
    behave: '0'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userListService: UserListService) {
    this.user = navParams.get('user');;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMember2Page');
  }

  last() {
    if(this.user.sexe == '0' || this.user.behave == '0'){
      console.log('Cliquez sur les images correspondantes');    // Traitement à faire
    }

    console.log(this.userListService.addUser(this.user));

    //console.log("Inscription avec les informations : <br>email : " + this.user.email + 
    //            "<br>pseudo : " + this.user.pseudo + "<br>date de naissance : " + this.user.birth + "<br>password : " + this.user.password);
    alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');

    this.navCtrl.setRoot(AuthPage);
  }

  updateData(data, type){
    switch (type) {
      case 'user.sexe':
          this.user.sexe = data ;
          break;
      case 'user.behave':
          this.user.behave = data ;
          break;
      default:
    }
  }

}
