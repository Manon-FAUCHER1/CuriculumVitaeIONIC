import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencesAddFormulairePage } from './experiences-add-formulaire.page';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesAddFormulairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencesAddFormulairePageRoutingModule {}
