import { Component, OnInit } from '@angular/core';
import { AdminNavComponent } from "../admin-nav/admin-nav.component";
import { RouterLink } from '@angular/router';
declare var $: any;
@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [AdminNavComponent,RouterLink]
})
export class AdminComponent {
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
