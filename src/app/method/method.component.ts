import { Component } from '@angular/core';
import { AdminNavComponent } from "../admin-nav/admin-nav.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-method',
    standalone: true,
    templateUrl: './method.component.html',
    styleUrl: './method.component.css',
    imports: [AdminNavComponent,RouterLink]
})
export class MethodComponent {

}
