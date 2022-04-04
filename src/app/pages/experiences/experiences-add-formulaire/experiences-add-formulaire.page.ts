import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiexperienceService } from '../../../service/api-experience.service';
import { ExperiencesModel } from '../../../model/experiences-model';

@Component({
  selector: 'app-experiences-add-formulaire',
  templateUrl: './experiences-add-formulaire.page.html',
  styleUrls: ['./experiences-add-formulaire.page.scss'],
})
export class ExperiencesAddFormulairePage implements OnInit {

  saisieForm!: FormGroup;

  businessctrl!: FormControl;
  startdatectrl!: FormControl;
  enddatectrl!: FormControl;
  rolectrl!: FormControl;

  constructor(private service: ApiexperienceService,
    private route: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.businessctrl = this.fb.control('', Validators.required);
    this.startdatectrl = this.fb.control('', Validators.required);
    this.enddatectrl = this.fb.control('', Validators.required);
    this.rolectrl = this.fb.control('', Validators.required);

    this.saisieForm = this.fb.group({
      business : this.businessctrl,
      startdate : this.startdatectrl,
      enddate : this.enddatectrl,
      role : this.rolectrl
    });
  }

  onSubmit() {
    if (this.saisieForm.valid){
      const e = new ExperiencesModel();
      e.business = this.businessctrl.value;
      e.startDate = this.startdatectrl.value;
      e.endDate = this.enddatectrl.value;
      e.role = this.rolectrl.value;
      this.service.add(e).subscribe(
        () => this.route.navigate(['/experiences'])
      );
    }
  }

}
