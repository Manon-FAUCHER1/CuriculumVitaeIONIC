import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExperiencesModel } from '../../../model/experiences-model';

@Component({
  selector: 'app-experiences-add',
  templateUrl: './experiences-add.component.html',
  styleUrls: ['./experiences-add.component.scss'],
})
export class ExperiencesAddComponent implements OnInit {

  @Output() onadd: EventEmitter<ExperiencesModel> =
    new EventEmitter<ExperiencesModel>();

  experience: ExperiencesModel = new ExperiencesModel();

  constructor() { }

  ngOnInit() {}

  add(e: ExperiencesModel): void {
    this.onadd.emit(e);
  }

}
