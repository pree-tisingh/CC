import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-kids',
    standalone: true,
    templateUrl: './kids.component.html',
    styleUrl: './kids.component.css',
    imports: [NavComponent, FooterComponent]
})
export class KidsComponent {

}
