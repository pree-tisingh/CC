import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-faq-login',
    standalone: true,
    templateUrl: './faq-login.component.html',
    styleUrl: './faq-login.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class FAQLOginComponent {
  constructor(private router: Router) {}

  redirectToPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue !== "#") {
      this.router.navigateByUrl(selectedValue);
    }
  }
}
