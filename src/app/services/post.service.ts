import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(public http: HttpClient) { }

  buscar(texto) {
    return this.http.get(`http://www.recipepuppy.com/api/?q=${texto}`);
  }

}
