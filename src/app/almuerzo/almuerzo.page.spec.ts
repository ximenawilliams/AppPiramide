import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlmuerzoPage } from './almuerzo.page';

describe('AlmuerzoPage', () => {
  let component: AlmuerzoPage;
  let fixture: ComponentFixture<AlmuerzoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmuerzoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlmuerzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
