import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantItemPage } from './plant-item.page';

describe('PlantItemPage', () => {
  let component: PlantItemPage;
  let fixture: ComponentFixture<PlantItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
