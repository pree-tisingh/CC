import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-cancel',
    standalone: true,
    templateUrl: './cancel.component.html',
    styleUrl: './cancel.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class CancelComponent {
  constructor(private router: Router) {}

  redirectToPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue !== "#") {
      this.router.navigateByUrl(selectedValue);
    }
  }
}
