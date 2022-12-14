import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaratsComponent } from './karats.component';

describe('KaratsComponent', () => {
  let component: KaratsComponent;
  let fixture: ComponentFixture<KaratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
