import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQRefundComponent } from './faq-refund.component';

describe('FAQRefundComponent', () => {
  let component: FAQRefundComponent;
  let fixture: ComponentFixture<FAQRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQRefundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
