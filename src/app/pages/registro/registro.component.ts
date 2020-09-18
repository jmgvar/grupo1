import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  register(): void{}

}
