import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransheaderComponent } from './transheader.component';

describe('TransheaderComponent', () => {
  let component: TransheaderComponent;
  let fixture: ComponentFixture<TransheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
