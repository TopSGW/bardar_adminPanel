import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrserstatusComponent } from './orserstatus.component';

describe('OrderstatusComponent', () => {
  let component: OrserstatusComponent;
  let fixture: ComponentFixture<OrserstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrserstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrserstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
