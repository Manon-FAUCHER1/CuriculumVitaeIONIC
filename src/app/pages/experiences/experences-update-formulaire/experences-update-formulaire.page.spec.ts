import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExperencesUpdateFormulairePage } from './experences-update-formulaire.page';

describe('ExperencesUpdateFormulairePage', () => {
  let component: ExperencesUpdateFormulairePage;
  let fixture: ComponentFixture<ExperencesUpdateFormulairePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperencesUpdateFormulairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperencesUpdateFormulairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
