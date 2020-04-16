import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuAlimentosPage } from './menu-alimentos.page';

describe('MenuAlimentosPage', () => {
  let component: MenuAlimentosPage;
  let fixture: ComponentFixture<MenuAlimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAlimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuAlimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
