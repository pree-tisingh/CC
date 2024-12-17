import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-women',
    standalone: true,
    templateUrl: './women.component.html',
    styleUrl: './women.component.css',
    imports: [NavComponent, FooterComponent]
})
export class WomenComponent {

}
