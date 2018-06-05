import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilPage } from '../pages/profil/profil';
//import { AuthPage } from '../pages/auth/auth';
import { HomePage } from '../pages/home/home';
import { ConversationsPage } from '../pages/conversations/conversations';
import { MessagesPage } from '../pages/messages/messages'; 
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { AddMemberPage } from '../pages/add-member/add-member';
import { AddMember2Page } from '../pages/add-member2/add-member2'; 
import { DemandesPage } from '../pages/demandes/demandes';
import { RadarPage } from '../pages/radar/radar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { firebaseConfig } from './firebase.credentials';
import { UserListService } from '../services/user-list.service';

@NgModule({
  declarations: [
    MyApp,
    ProfilPage,
    ConversationsPage,
    MessagesPage,
    HomePage,
    SigninPage,
   // AuthPage,
    TabsPage,
    AddMemberPage,
    AddMember2Page,
    DemandesPage,
    RadarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilPage,
    HomePage,
    AddMemberPage,
    AddMember2Page,
    ConversationsPage,
    MessagesPage,
  //  AuthPage,
    SigninPage,
    TabsPage,
    DemandesPage,
    RadarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserListService
  ]
})
export class AppModule {}
