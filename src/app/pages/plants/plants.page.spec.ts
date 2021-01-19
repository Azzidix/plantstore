import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantsPage } from './plants.page';

describe('PlantsPage', () => {
  let component: PlantsPage;
  let fixture: ComponentFixture<PlantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
