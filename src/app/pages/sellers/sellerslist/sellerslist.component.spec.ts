import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerslistComponent } from './sellerslist.component';

describe('SellerslistComponent', () => {
  let component: SellerslistComponent;
  let fixture: ComponentFixture<SellerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
