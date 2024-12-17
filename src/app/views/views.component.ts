import { Component } from '@angular/core';
import { AdminNavComponent } from "../admin-nav/admin-nav.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-views',
    standalone: true,
    templateUrl: './views.component.html',
    styleUrl: './views.component.css',
    imports: [AdminNavComponent,RouterLink]
})
export class ViewsComponent {

}
