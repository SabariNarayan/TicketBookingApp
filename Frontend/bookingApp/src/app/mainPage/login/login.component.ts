import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginFormVisibilityService } from 'src/app/services/loginformvisiblity.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showLoginForm: boolean = false;

  constructor(
    private loginService: LoginService,
    private loginformvisiblityService  : LoginFormVisibilityService,
    private router:Router
  ) {
    this.loginformvisiblityService.showLoginForm$.subscribe(
      (visibility: boolean) => {
        this.showLoginForm = visibility;
      }
    );
  }

  @Output() submitted = new EventEmitter<void>();
  @Output() loginFormOpened = new EventEmitter<boolean>();

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.loginformvisiblityService.setShowLoginFormVisibility(this.showLoginForm);
    this.loginFormOpened.emit(this.showLoginForm);
  }

  onSubmit() {
    // Emit the 'submitted' event when the form is submitted
    this.submitted.emit();

    // Call the login service to perform the API call to your backend server
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        alert('Login successful');
        this.loginformvisiblityService.setShowLoginFormVisibility(false);
        this.loginformvisiblityService.setLoggedIn(true);
        this.router.navigate(['dashboard']);
      },
      (error) => {
        alert('Invalid credentials');
      }
    );
  }

  onCancel() {
    this.loginformvisiblityService.setShowLoginFormVisibility(false);
  }
}
