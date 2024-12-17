import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-address',
    standalone: true,
    templateUrl: './address.component.html',
    styleUrl: './address.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class AddressComponent {

}
