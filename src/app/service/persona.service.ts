import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://argprogmurua.herokuapp.com/perfil/';
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'detail/1');

  }
  public update(id: number, persona:persona):Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, persona);
  }
  public detail(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL + `detail/${id}` );
  }

}
