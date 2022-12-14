import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenfcategoriesComponent } from './kenfcategories.component';

describe('KenfcategoriesComponent', () => {
  let component: KenfcategoriesComponent;
  let fixture: ComponentFixture<KenfcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenfcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenfcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
