import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _authService: AuthService) {
  }
  ngOnInit(): void {
    this.login()
  }

  login() {
    this._authService.login('test1@gmail.com', '123456').subscribe((resp)=>{
      console.log(resp)
    })
  }

}
