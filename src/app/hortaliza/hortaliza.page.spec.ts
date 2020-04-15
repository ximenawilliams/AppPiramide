import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HortalizaPage } from './hortaliza.page';

describe('HortalizaPage', () => {
  let component: HortalizaPage;
  let fixture: ComponentFixture<HortalizaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HortalizaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HortalizaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
