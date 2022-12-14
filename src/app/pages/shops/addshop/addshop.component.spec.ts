import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshopComponent } from './addshop.component';

describe('AddshopComponent', () => {
  let component: AddshopComponent;
  let fixture: ComponentFixture<AddshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
