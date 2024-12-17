import { Component, ElementRef } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [NavComponent,RouterLink]
})
export class DetailsComponent  {
  constructor(private el: ElementRef) {}

  addToCart() {
    const cartMessage = this.el.nativeElement.querySelector('#cart-message');
    cartMessage.style.display = 'block';

    setTimeout(() => {
      this.hideMessage(cartMessage);
    }, 2000);
  }

  hideMessage(messageElement: HTMLElement) {
    messageElement.style.display = 'none';
  }
}
