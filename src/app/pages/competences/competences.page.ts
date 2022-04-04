import { Component, OnInit } from '@angular/core';
import { CompetencesModel } from '../../model/competences-model';
import { ApiCompetencesService } from '../../service/api-competences.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.page.html',
  styleUrls: ['./competences.page.scss'],
})
export class CompetencesPage implements OnInit {
  competence!: CompetencesModel;

  listCompetences!: CompetencesModel[];

  constructor(
    private servicecompetences: ApiCompetencesService,
  ) { }

  ngOnInit() {
    this.servicecompetences
    .findAll()
    .subscribe((listC) => ( console.log(listC)));
  }

}
