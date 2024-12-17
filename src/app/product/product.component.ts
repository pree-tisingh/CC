import { Component, AfterViewInit, ElementRef,OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class ProductComponent {
    constructor(private el: ElementRef, private router: Router) {}
    ngOnInit(): void {
      
    }
  
    scrollToSection(sectionId: string): void {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
}
}