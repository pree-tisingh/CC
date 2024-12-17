import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQLOginComponent } from './faq-login.component';

describe('FAQLOginComponent', () => {
  let component: FAQLOginComponent;
  let fixture: ComponentFixture<FAQLOginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQLOginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQLOginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
