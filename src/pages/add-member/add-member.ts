import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddMember2Page } from '../add-member2/add-member2'; 
/*import { Observable } from 'rxjs/Observable';*/
import { User } from '../../model/user/user.model';
import { UserListService } from '../../services/user-list.service';

@IonicPage()
@Component({ 
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage {
  //userList: Observable<Note[]>
  navP: NavParams;
  isNew: number = 0 ;

  user: User = {
    identifiant: '',
    sexe: '',
    birth: '',
    email: '',
    password: '',
    password2: '',
    behave: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userListService: UserListService) {
        this.isNew = navParams.get('isNew');
        this.navP = navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMemberPage');
  }

  last() {
    if(this.user.password != this.user.password2){
        console.log('Mots de passe non correspondants');    // Traitement à faire
    }else{
        this.navCtrl.push(AddMember2Page, {user: this.user});
    }
  }

  updateData(data, type){
    switch (type) {
      case 'user.identifiant':
          this.user.identifiant = data ;
          break;
      case 'user.birth':
          this.user.birth = data ;
          break;
      case 'user.email':
          this.user.email = data ;
          break;
      case 'user.password':
          this.user.password = data ;
          break;
      case 'user.password2':
          this.user.password2 = data ;
          break;
      default:
    }
  }

}