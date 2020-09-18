import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { HttpClient} from '@angular/common/http'
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {

    constructor(private http: HttpClient) { }

    register(usuario: Usuario){
      return this.http.post(environment.reqresApi+'register', usuario);
    }
  }
}
