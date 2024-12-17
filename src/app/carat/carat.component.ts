import { Component, AfterViewInit, ElementRef,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-carat',
    standalone: true,
    templateUrl: './carat.component.html',
    styleUrl: './carat.component.css',
    imports: [NavComponent, FooterComponent, RouterLink]
})
export class CaratComponent {
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
