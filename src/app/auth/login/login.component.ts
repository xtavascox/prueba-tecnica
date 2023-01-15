import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    username: ['test1@gmail.com', [Validators.required]],
    password: ['123456', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private readonly messageService: MessageService,
    private router: Router,
    private readonly _authService: AuthService
  ) {
  }


  login() {
    const {username, password} = this.loginForm.value

    this._authService.login(username, password).subscribe({
      next: (resp) => {
        localStorage.setItem('U-PT', JSON.stringify(resp.usuario))
        sessionStorage.setItem('token', resp.token)
        console.log(resp.token)
        this.router.navigate(['dashboard'])
      },
      error: (err) => {
        if (err.error.msg) {
          this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.msg, life: 1500})
          return
        }
        const temp = err.error.errors.map((item: any) => ({
          severity: 'error',
          summary: 'Error',
          detail: item.msg,
          life: 1500
        }))
        this.messageService.addAll(temp)
      }
    })
  }

}
