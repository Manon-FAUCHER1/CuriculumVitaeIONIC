import { Component, OnInit } from '@angular/core';
import { FormationsModel } from '../../model/formations-model';
import { ApiFormationsService } from '../../service/api-formations.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  listFormation!: FormationsModel[];

  public formations;

  constructor(private serviceFormations: ApiFormationsService) { }

  ngOnInit() {

    this.serviceFormations.findAll().subscribe(listF => this.listFormation = listF);
  }

}
