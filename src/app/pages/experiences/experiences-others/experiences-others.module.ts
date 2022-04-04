import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesOthersPageRoutingModule } from './experiences-others-routing.module';

import { ExperiencesOthersPage } from './experiences-others.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencesOthersPageRoutingModule
  ],
  declarations: [ExperiencesOthersPage]
})
export class ExperiencesOthersPageModule {}
