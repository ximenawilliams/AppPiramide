import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnackPage } from './snack.page';

describe('SnackPage', () => {
  let component: SnackPage;
  let fixture: ComponentFixture<SnackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SnackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
