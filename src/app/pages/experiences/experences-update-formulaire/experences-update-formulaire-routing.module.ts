import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperencesUpdateFormulairePage } from './experences-update-formulaire.page';

const routes: Routes = [
  {
    path: ':id',
    component: ExperencesUpdateFormulairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperencesUpdateFormulairePageRoutingModule {}
