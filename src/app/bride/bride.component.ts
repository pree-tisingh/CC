import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-bride',
    standalone: true,
    templateUrl: './bride.component.html',
    styleUrl: './bride.component.css',
    imports: [NavComponent, FooterComponent, RouterLink]
})
export class BrideComponent {

}
