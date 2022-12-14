import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopslistComponent } from './shopslist.component';

describe('ShopslistComponent', () => {
  let component: ShopslistComponent;
  let fixture: ComponentFixture<ShopslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
