import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ShopComponent } from "./shop/shop.component";
import { CaratComponent } from './carat/carat.component';
import { AdminComponent } from "./admin/admin.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavComponent, HomeComponent, FooterComponent, ShopComponent, CaratComponent, AdminComponent]
})
export class AppComponent {
  title = 'CC';
}
