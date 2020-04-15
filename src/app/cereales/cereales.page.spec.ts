import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerealesPage } from './cereales.page';

describe('CerealesPage', () => {
  let component: CerealesPage;
  let fixture: ComponentFixture<CerealesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerealesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerealesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
