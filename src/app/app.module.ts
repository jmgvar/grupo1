import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoUsuarioComponent } from './components/listados/listado-usuario/listado-usuario.component';
import { ListadoRecursoComponent } from './components/listados/listado-recurso/listado-recurso.component';
import { DetalleRecursoComponent } from './components/detalle/detalle-recurso/detalle-recurso.component';
import { DetalleUsuarioComponent } from './components/detalle/detalle-usuario/detalle-usuario.component';
import { EdicionUsuacioComponent } from './components/edicion-usuacio/edicion-usuacio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecursoComponent } from './components/recurso/recurso.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuarioComponent,
    ListadoRecursoComponent,
    DetalleRecursoComponent,
    DetalleUsuarioComponent,
    EdicionUsuacioComponent,
    LoginComponent,
    RegistroComponent,
    RecursoComponent,
    UsuariosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
