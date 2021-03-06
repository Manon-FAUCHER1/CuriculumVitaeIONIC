import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesPageRoutingModule } from './experiences-routing.module';

import { ExperiencesPage } from './experiences.page';
import { ExperiencesAddComponent } from '../experiences-add/experiences-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencesPageRoutingModule
  ],
  declarations: [ExperiencesPage,  ExperiencesAddComponent]
})
export class ExperiencesPageModule {}
