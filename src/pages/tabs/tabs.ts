import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { myprofilPage } from '../myprofil/myprofil';
import { AuthPage } from '../auth/auth';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = myprofilPage;
  tab5Root = AuthPage;


  constructor() {

  }
}
