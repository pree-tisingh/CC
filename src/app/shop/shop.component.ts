import { Component, AfterViewInit, ElementRef,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
declare var $: any;
@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [NavComponent, FooterComponent, RouterLink]
})
export class ShopComponent implements AfterViewInit, OnInit {
  constructor(private el: ElementRef, private router: Router) {}
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    $(this.el.nativeElement).find('.img-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow: false,
      nextArrow: false
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}