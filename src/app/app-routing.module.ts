import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoUsuarioComponent } from './pages/listados/listado-usuario/listado-usuario.component';
import { ListadoRecursoComponent } from './pages/listados/listado-recurso/listado-recurso.component';
import { DetalleRecursoComponent } from './pages/detalle/detalle-recurso/detalle-recurso.component';
import { DetalleUsuarioComponent } from './pages/detalle/detalle-usuario/detalle-usuario.component';
import { EdicionUsuacioComponent } from './pages/edicion-usuacio/edicion-usuacio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecursoComponent } from './pages/recurso/recurso.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [];

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: ' listado_usuario/:id', component: ListadoUsuarioComponent },
  { path: ' detalle_usuario/:id', component: DetalleUsuarioComponent },
  { path: ' listado_recurso/:id', component: ListadoRecursoComponent },
  { path: ' detalle_recurso/:id', component: DetalleRecursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
