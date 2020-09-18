import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { HttpClient} from '@angular/common/http'
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private http: HttpClient) { }

  addOrUpdate(usuario: Usuario){
    if(usuario.id!=undefined){
      return this.http.post(environment.reqresApi+'users',usuario);
    }else{
      return this.http.put(environment.reqresApi+'users',usuario);
    }
  }

  get(id: String){
    return this.http.get(environment.reqresApi+'users/'+id);
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(environment.reqresApi+'users');
  }

  delete(id: String){
    return this.http.delete(environment.reqresApi+'users/'+id);
  }
}
