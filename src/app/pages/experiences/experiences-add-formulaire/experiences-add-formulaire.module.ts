import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesAddFormulairePageRoutingModule } from './experiences-add-formulaire-routing.module';

import { ExperiencesAddFormulairePage } from './experiences-add-formulaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencesAddFormulairePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExperiencesAddFormulairePage]
})
export class ExperiencesAddFormulairePageModule {}
