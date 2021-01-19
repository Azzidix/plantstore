import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreTransactionPage } from './store-transaction.page';

describe('StoreTransactionPage', () => {
  let component: StoreTransactionPage;
  let fixture: ComponentFixture<StoreTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
