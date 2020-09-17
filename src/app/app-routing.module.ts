import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoUsuarioComponent } from './pages/listado/listado-usuario/listado-usuario.component';
import { ListadoRecursoComponent } from './pages/listado/listado-recurso/listado-recurso.component';
import { DetalleRecursoComponent } from './pages/detalle/detalle-recurso/detalle-recurso.component';
import { DetalleUsuarioComponent } from './pages/detalle/detalle-usuario/detalle-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: ' listado_usuario', component: ListadoUsuarioComponent },
  { path: ' detalle_usuario/:id', component: DetalleUsuarioComponent },
  { path: ' listado_recurso', component: ListadoRecursoComponent },
  { path: ' detalle_recurso/:id', component: DetalleRecursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
