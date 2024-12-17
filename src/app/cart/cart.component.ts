import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [NavComponent,RouterLink]
})
export class CartComponent {

}
