import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, ],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  user = new FormControl('');
  password = new FormControl('');

  async login(){
    console.log(this.user.value, this.password.value);
    const apiUrl =  "http://localhost:3000/auth/login"
    await this.http.post(apiUrl, {
      email: this.user.value,
      password: this.password.value
    }).subscribe({
      next:(user)=>{
        console.log(user);
        this.router.navigate(["/products"])
      },
      error: (err)=>{
        alert("Login failed")
        console.log(err);
      }
    }
  )
  }



}
