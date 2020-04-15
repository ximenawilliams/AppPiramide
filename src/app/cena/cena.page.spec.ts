import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CenaPage } from './cena.page';

describe('CenaPage', () => {
  let component: CenaPage;
  let fixture: ComponentFixture<CenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
