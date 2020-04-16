import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PicadasPage } from './picadas.page';

describe('PicadasPage', () => {
  let component: PicadasPage;
  let fixture: ComponentFixture<PicadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PicadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
