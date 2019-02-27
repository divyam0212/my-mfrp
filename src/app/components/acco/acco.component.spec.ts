import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoComponent } from './acco.component';

describe('AccoComponent', () => {
  let component: AccoComponent;
  let fixture: ComponentFixture<AccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
