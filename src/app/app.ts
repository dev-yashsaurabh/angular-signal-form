import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { form, Field, required, email, min, minLength } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

interface LoginForm {
  email: string,
  password: string,
  address: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, Field, MatFormFieldModule],

})
export class App {
  protected readonly title = signal('angular-signal-form');

  loginFormModel = signal<LoginForm>({
    email: '',
    password: '',
    address: ''
  });

  loginForm = form(this.loginFormModel, (schema) => {
    required(schema.email, { message: "Email is required" });
    email(schema.email, { message: "Email is not valid!" });
    minLength(schema.password, 6, { message: "Minimum length should be 6!" });
    required(schema.password, { message: "Password is required" });
    required(schema.address, { message: "Address is required!" });
  });

  onSubmit(e: Event) {
    e.preventDefault();

    const formValue = this.loginFormModel();
  }
}
