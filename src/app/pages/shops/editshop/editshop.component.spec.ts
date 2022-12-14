import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopComponent } from './editshop.component';

describe('AddshopComponent', () => {
  let component: EditShopComponent;
  let fixture: ComponentFixture<EditShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
