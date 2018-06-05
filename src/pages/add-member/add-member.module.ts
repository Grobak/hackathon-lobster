import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { AddMemberPage } from './add-member';

@NgModule({
  declarations: [
    AddMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMemberPage),
  ],
})
export class AddMemberPageModule {}
