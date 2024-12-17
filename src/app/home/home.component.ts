import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

declare var $: any;
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavComponent, FooterComponent,RouterLink]
})
export class HomeComponent implements AfterViewInit, OnInit{
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    $(this.el.nativeElement).find('.img-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      prevArrow: false,
      nextArrow: false
    });

    $(this.el.nativeElement).find('.video-carousel').slick({
     
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    });
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
    const targets = document.querySelectorAll('.animate-section');

    targets.forEach((target) => {
      observer.observe(target);
    });
  }

  handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateSection();
        observer.unobserve(entry.target);
      }
    });
  }

  animateSection() {
    gsap.from('.left-img .img-carousel img', {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.right-img .right-carousel', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power4.out',
    });
    gsap.from('.heading-container', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.line-image', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'power4.out',
    });
    gsap.from('.box', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power4.out',
    });
  }
  signupFormVisible = false;
  loginFormVisible = false;

  ngOnInit() {
    const showLoginFormButton = document.getElementById("show-login-form");
    const showSignupFormButton = document.getElementById("show-signup-form");
    const loginFormCloseButton = document.querySelector("#login-form .close-btn");
    const signupFormCloseButton = document.querySelector("#signup-form .close-btn");

    if (showLoginFormButton) {
      showLoginFormButton.addEventListener("click", () => {
        this.signupFormVisible = false;
        this.loginFormVisible = true;
      });
    }

    if (showSignupFormButton) {
      showSignupFormButton.addEventListener("click", () => {
        this.loginFormVisible = false;
        this.signupFormVisible = true;
      });
    }

    if (loginFormCloseButton) {
      loginFormCloseButton.addEventListener("click", () => {
        this.loginFormVisible = false;
      });
    }

    if (signupFormCloseButton) {
      signupFormCloseButton.addEventListener("click", () => {
        this.signupFormVisible = false;
      });
    }
    setTimeout(() => {
      this.showSignupForm() ;
    }, 8000);
  }

  showSignupForm() {
    this.loginFormVisible = false;
    this.signupFormVisible = true;
  }

  showLoginForm() {
    this.signupFormVisible = false;
    this.loginFormVisible = true;
  }

  closeLoginForm() {
    this.loginFormVisible = false;
  }

  closeSignupForm() {
    this.signupFormVisible = false;
  }

  
}
