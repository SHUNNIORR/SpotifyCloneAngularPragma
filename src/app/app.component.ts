import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginurl:string=this.authService.loginUrl

  tokenExists:boolean = false;

  ngOnInit(): void {
    this.authService.guardarToken()
    this.authService.existToken()
    this.tokenExists=this.authService.existToken()
  }

}
