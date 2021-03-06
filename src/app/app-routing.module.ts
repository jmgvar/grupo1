import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ListadoUsuarioComponent } from './pages/listado/listado-usuario/listado-usuario.component';
import { ListadoRecursoComponent } from './pages/listado/listado-recurso/listado-recurso.component';
import { DetalleRecursoComponent } from './pages/detalle/detalle-recurso/detalle-recurso.component';
import { DetalleUsuarioComponent } from './pages/detalle/detalle-usuario/detalle-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { EdicionUsuarioComponent } from './pages/usuario/edicion-usuario/edicion-usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent,
    children: [      
      { path: 'edicion', component: EdicionUsuarioComponent },
      { path: 'detalle/detalle_usuario/:id', component: DetalleUsuarioComponent }
    ]
  },
  { path: 'registro', component: RegistroComponent },

  { path: 'listado_usuario', component: ListadoUsuarioComponent },
  { path: 'detalle_usuario/:id', component: DetalleUsuarioComponent },
  { path: 'listado_recurso', component: ListadoRecursoComponent },
  { path: 'detalle_recurso/:id', component: DetalleRecursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
