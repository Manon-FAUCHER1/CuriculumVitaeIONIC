import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencesOthersPage } from './experiences-others.page';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesOthersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencesOthersPageRoutingModule {}
