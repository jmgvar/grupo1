import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  
  constructor(private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void{
    if(true){
      this.router.navigate(['users']);
    }   
  }
  
  register(): void{
    this.router.navigate(['registro']);
  } 

}
