import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperencesUpdateFormulairePageRoutingModule } from './experences-update-formulaire-routing.module';

import { ExperencesUpdateFormulairePage } from './experences-update-formulaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperencesUpdateFormulairePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExperencesUpdateFormulairePage]
})
export class ExperencesUpdateFormulairePageModule {}
