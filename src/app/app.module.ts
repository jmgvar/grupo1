import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoUsuarioComponent } from './pages/listado/listado-usuario/listado-usuario.component';
import { ListadoRecursoComponent } from './pages/listado/listado-recurso/listado-recurso.component';
import { DetalleRecursoComponent } from './pages/detalle/detalle-recurso/detalle-recurso.component';
import { DetalleUsuarioComponent } from './pages/detalle/detalle-usuario/detalle-usuario.component';
import { EdicionUsuarioComponent } from './pages/usuario/edicion-usuario/edicion-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecursoComponent } from './pages/recurso/recurso.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuarioComponent,
    ListadoRecursoComponent,
    DetalleRecursoComponent,
    DetalleUsuarioComponent,
    EdicionUsuarioComponent,
    LoginComponent,
    RegistroComponent,
    RecursoComponent,
    UsuarioComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
