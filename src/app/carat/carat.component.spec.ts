import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratComponent } from './carat.component';

describe('CaratComponent', () => {
  let component: CaratComponent;
  let fixture: ComponentFixture<CaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
