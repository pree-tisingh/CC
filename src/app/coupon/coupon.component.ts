import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-coupon',
    standalone: true,
    templateUrl: './coupon.component.html',
    styleUrl: './coupon.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class CouponComponent {

}
