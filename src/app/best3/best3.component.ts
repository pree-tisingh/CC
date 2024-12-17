import { Component, AfterViewInit, ElementRef,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-best3',
    standalone: true,
    templateUrl: './best3.component.html',
    styleUrl: './best3.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class Best3Component {
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
