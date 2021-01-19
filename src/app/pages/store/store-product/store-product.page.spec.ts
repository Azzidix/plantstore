import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreProductPage } from './store-product.page';

describe('StoreProductPage', () => {
  let component: StoreProductPage;
  let fixture: ComponentFixture<StoreProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
