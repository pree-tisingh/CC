import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-career',
    standalone: true,
    templateUrl: './career.component.html',
    styleUrl: './career.component.css',
    imports: [NavComponent, FooterComponent, RouterLink]
})
export class CareerComponent {
  constructor(private router: Router) {}

  redirectToPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue !== "#") {
      this.router.navigateByUrl(selectedValue);
    }
  }
}
