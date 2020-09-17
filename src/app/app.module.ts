import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoUsuarioComponent } from './pages/listado/listado-usuario/listado-usuario.component';
import { ListadoRecursoComponent } from './pages/listado/listado-recurso/listado-recurso.component';
import { DetalleRecursoComponent } from './pages/detalle/detalle-recurso/detalle-recurso.component';
import { DetalleUsuarioComponent } from './pages/detalle/detalle-usuario/detalle-usuario.component';
import { EdicionUsuacioComponent } from './pages/edicion-usuario/edicion-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecursoComponent } from './pages/recurso/recurso.component';
import { UsuariosComponent } from './pages/usuario/usuarios.component';
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
