import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import { AuthPage } from '../auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  profile = ProfilPage;
  auth = AuthPage;

  constructor() {

  }
}
