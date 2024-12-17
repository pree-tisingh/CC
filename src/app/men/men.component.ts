import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-men',
    standalone: true,
    templateUrl: './men.component.html',
    styleUrl: './men.component.css',
    imports: [FooterComponent, NavComponent]
})
export class MenComponent {

}
