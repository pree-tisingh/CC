import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-notification',
    standalone: true,
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class NotificationComponent {

}
