import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerhistoryComponent } from './timerhistory.component';

describe('TimerhistoryComponent', () => {
  let component: TimerhistoryComponent;
  let fixture: ComponentFixture<TimerhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
