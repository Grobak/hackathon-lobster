import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddMember2Page } from '../add-member2/add-member2'; 
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user/user.model';
 
@IonicPage()
@Component({ 
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage {
  userList: Observable<User[]>
  navP: NavParams;
  isNew: number = 1 ;

  user: User = {
    pseudo: '1',
    sexe: '1', 
    birth: '1',
    email: '1',
    password: '1',
    password2: '1',
    behave: '1'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.isNew = navParams.get('isNew');
  }

  ionViewDidLoad() {
  }

  last() {
      console.log(this.user);
      
      if(this.user.pseudo == '1' || this.user.birth == '1' || this.user.password == '1' || this.user.email == '1'){
        
          console.log('Champs invalides');    // Traitement à faire
  
      }else if(this.user.password != this.user.password2){
  
          console.log('Mots de passe non correspondants');    // Traitement à faire
      }
      else{
          console.log(this.user);
          this.navCtrl.push(AddMember2Page, {user: this.user});
      } 
  }

  updateData(data, type){
    switch (type) {
      case 'user.pseudo':
          this.user.pseudo = data ;
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