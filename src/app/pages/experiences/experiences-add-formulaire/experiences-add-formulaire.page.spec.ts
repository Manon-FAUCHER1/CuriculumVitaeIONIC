import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExperiencesAddFormulairePage } from './experiences-add-formulaire.page';

describe('ExperiencesAddFormulairePage', () => {
  let component: ExperiencesAddFormulairePage;
  let fixture: ComponentFixture<ExperiencesAddFormulairePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesAddFormulairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesAddFormulairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
