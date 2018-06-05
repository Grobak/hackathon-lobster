import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
    identifiant: '',
    sexe: '',
    birth: '',
    mail: '',
    password: '',
    password2: '',
    behave: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userListService: UserListService) {
    this.user = navParams.get('user');;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMember2Page');
  }

  last() {
    this.userListService.addUser(this.user);
    console.log(this.user);
    //this.navCtrl.push(HomePage);
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
