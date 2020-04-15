import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrutasPage } from './frutas.page';

describe('FrutasPage', () => {
  let component: FrutasPage;
  let fixture: ComponentFixture<FrutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
