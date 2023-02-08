import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagemErro = '';

  constructor(private LoginService: LoginService, private router: Router) { }

    onLogin(): void { 
      this.mensagemErro = '';
      if (this.LoginService.login(this.usuario, this.senha)) {
        this.router.navigate(['/']);
      }
      else {
        this.mensagemErro = 'Login ou Senha Inválidos. ';
      }
    }

  ngOnInit(): void {
  }

}
