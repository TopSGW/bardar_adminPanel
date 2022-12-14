import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcategoriesComponent } from './itemcategories.component';

describe('ItemcategoriesComponent', () => {
  let component: ItemcategoriesComponent;
  let fixture: ComponentFixture<ItemcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
