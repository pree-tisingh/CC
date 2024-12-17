import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gift',
    standalone: true,
    templateUrl: './gift.component.html',
    styleUrl: './gift.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class GiftComponent {

}
