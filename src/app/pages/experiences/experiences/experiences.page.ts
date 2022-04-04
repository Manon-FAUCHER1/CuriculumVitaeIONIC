/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ExperiencesModel } from '../../../model/experiences-model';
import { ApiexperienceService } from '../../../service/api-experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {
  experience!: ExperiencesModel;

  listeExperiences!: ExperiencesModel[];

  constructor(
    private serviceexperiences: ApiexperienceService,
    private route: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.serviceexperiences
      .findAll()
      .subscribe((listE) => (this.listeExperiences = listE));
    this.experience = new ExperiencesModel();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  add(e: ExperiencesModel) {
    this.listeExperiences.push({ ...e });
  }

  update(e: ExperiencesModel) {
    /** routerLink="/experences-update-formulaire" **/
    this.route.navigate(['/experences-update-formulaire', e.id]);
  }

  delete(e: ExperiencesModel) {
    console.log(e);
    this.serviceexperiences.delete(e);
  }
}
