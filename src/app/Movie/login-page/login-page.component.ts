import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  gotomain(){
    this.router.navigate([`/mainpage/`])
    
  }
}
