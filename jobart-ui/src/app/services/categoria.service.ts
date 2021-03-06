import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://jobart.herokuapp.com/categoria', this.token)
  }

  getByIdCategoria(id: number) : Observable<Categoria> {
    return this.http.get<Categoria>(`https://jobart.herokuapp.com/categoria/${id}`, this.token)
  }

  postCategoria(categoria: Categoria) : Observable<Categoria> {
    return this.http.post<Categoria>('https://jobart.herokuapp.com/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>('https://jobart.herokuapp.com/categoria',categoria, this.token );
  }

  deleteCategoria(id:number){
    return this.http.delete(`https://jobart.herokuapp.com/categoria/${id}`, this.token);
  }

  getByNomeCategoria(nome: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`https://jobart.herokuapp.com/categoria/nome/${nome}`, this.token)
  }
}
