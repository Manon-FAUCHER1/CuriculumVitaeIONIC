import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/profil/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'competences',
    loadChildren: () => import('./pages/competences/competences.module').then( m => m.CompetencesPageModule)
  },
  {
    path: 'formations',
    loadChildren: () => import('./pages/formations/formations.module').then( m => m.FormationsPageModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./pages/experiences/experiences/experiences.module').then( m => m.ExperiencesPageModule)
  },
  {
    path: 'experiences-others',
    loadChildren: () => import('./pages/experiences/experiences-others/experiences-others.module').then( m => m.ExperiencesOthersPageModule)
  },
  {
    path: 'experiences-add-formulaire',
    loadChildren: () => import('./pages/experiences/experiences-add-formulaire/experiences-add-formulaire.module')
    .then( m => m.ExperiencesAddFormulairePageModule)
  },
  {
    path: 'experences-update-formulaire',
    loadChildren: () => import('./pages/experiences/experences-update-formulaire/experences-update-formulaire.module')
    .then( m => m.ExperencesUpdateFormulairePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
