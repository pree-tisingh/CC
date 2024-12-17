import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-upi',
    standalone: true,
    templateUrl: './upi.component.html',
    styleUrl: './upi.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class UpiComponent {

}
