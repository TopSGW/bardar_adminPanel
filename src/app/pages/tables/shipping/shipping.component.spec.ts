import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsgroupsComponent } from './itemsgroups.component';

describe('ItemsgroupsComponent', () => {
  let component: ItemsgroupsComponent;
  let fixture: ComponentFixture<ItemsgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
