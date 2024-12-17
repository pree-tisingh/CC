import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Best3Component } from './best3.component';

describe('Best3Component', () => {
  let component: Best3Component;
  let fixture: ComponentFixture<Best3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Best3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Best3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
