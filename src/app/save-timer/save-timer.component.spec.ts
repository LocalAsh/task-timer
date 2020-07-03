import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTimerComponent } from './save-timer.component';

describe('SaveTimerComponent', () => {
  let component: SaveTimerComponent;
  let fixture: ComponentFixture<SaveTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
