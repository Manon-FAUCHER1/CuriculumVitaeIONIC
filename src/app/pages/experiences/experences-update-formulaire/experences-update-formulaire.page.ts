import { ApiexperienceService } from '../../../service/api-experience.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesModel } from '../../../model/experiences-model';


@Component({
  selector: 'app-experences-update-formulaire',
  templateUrl: './experences-update-formulaire.page.html',
  styleUrls: ['./experences-update-formulaire.page.scss'],
})
export class ExperencesUpdateFormulairePage implements OnInit {

  saisieForm!: FormGroup;

  id!: number;

  businessctrl!: FormControl;
  startdatectrl!: FormControl;
  enddatectrl!: FormControl;
  rolectrl!: FormControl;

  constructor(private service: ApiexperienceService,
    private route: Router,
    private np: ActivatedRoute,
    private fb: FormBuilder) {
      this.service.findOne(this.np.snapshot.paramMap.get('id')).subscribe(
        data => {
          console.log(data);
          this.businessctrl = this.fb.control(data.business);
          this.startdatectrl = this.fb.control(data.startDate);
          this.enddatectrl = this.fb.control(data.endDate, Validators.required);
          this.rolectrl = this.fb.control(data.role, Validators.required);
          this.id = data.id;
          this.saisieForm = this.fb.group({
            business0 : this.businessctrl,
            startdate0 : this.startdatectrl,
            enddate : this.enddatectrl,
            role : this.rolectrl
          });
        }
      );
    }

  ngOnInit() {
    this.saisieForm = this.fb.group({
      business0 : [],
      startdate0 : [],
      enddate : [],
      role : []
    });
  }

  onSubmit() {
    if (this.saisieForm.valid){
      const e = new ExperiencesModel();
      e.id = this.id;
      e.business = this.businessctrl.value;
      e.startDate = this.startdatectrl.value;
      e.endDate = this.enddatectrl.value;
      e.role = this.rolectrl.value;
      this.service.update(e).subscribe(
        () => this.route.navigate(['/experiences'])
      );
    }
  }
}
