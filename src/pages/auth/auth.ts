import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddMemberPage } from '../add-member/add-member';
import { SigninPage } from '../signin/signin';

/**/
import { AngularFireDatabase } from 'angularfire2/database';
/**/

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  noteList: Observable<Note[]>

  /*
  site = {
    url: 'javasampleapproach.com',
    description: 'Java Technology - Spring Framework'
  };*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
    //console.log(this);
  }

  register(isNew: number) {
    this.navCtrl.push(AddMemberPage, {isNew: isNew});
  }

  connect() {
    this.navCtrl.push(SigninPage);
  }

}
