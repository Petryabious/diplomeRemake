import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  public login: string = '';
  public password: string = '';

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  public onSubmit() {
    console.log(this.login);
    console.log(this.password);
    this.authService.isAuth.set(true);

    this.router.navigate(['/']);
  }
}
