import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { ServicioUsuarioService } from 'src/app/service/servicio-usuario.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {

  listaUsuarios: Array<Usuario> = [];
  
  constructor(private userService: ServicioUsuarioService, private router: Router) { 
    userService.getAll().subscribe(data => 
        this.listaUsuarios = data['data']);
  }

  ngOnInit(): void {
  }

}
