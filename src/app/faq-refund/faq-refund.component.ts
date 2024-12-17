import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-faq-refund',
    standalone: true,
    templateUrl: './faq-refund.component.html',
    styleUrl: './faq-refund.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class FAQRefundComponent {
  constructor(private router: Router) {}

  redirectToPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue !== "#") {
      this.router.navigateByUrl(selectedValue);
    }
  }
}
