import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesayunoPage } from './desayuno.page';

describe('DesayunoPage', () => {
  let component: DesayunoPage;
  let fixture: ComponentFixture<DesayunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesayunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesayunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
