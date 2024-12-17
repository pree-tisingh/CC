import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gift-card',
    standalone: true,
    templateUrl: './gift-card.component.html',
    styleUrl: './gift-card.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class GiftCardComponent {

}
