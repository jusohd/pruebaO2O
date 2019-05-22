import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Receta } from '../../modelos/datos.modelo';
import { NgModel } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PostService } from '../../services/post.service';





@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  @ViewChild('searchBox') public searchBox: NgModel;
  public texto: string;
  public recetas: Receta[];

  // tslint:disable-next-line:variable-name
  constructor(private _post: PostService) {
    this.recetas = [];
    this.texto = '';
  }

  ngOnInit() {
    // Evento que se dispara con cada tecleo del usuario, para que no haya bloqueo por exceso de consultas post por cada letra
    this.searchBox.valueChanges.pipe(debounceTime(300)).subscribe(evt => {
      this._post.buscar(evt).subscribe((data: any) => {

        if (data.results !== null) {
          this.recetas = data.results;
        }

      });
    });
  }

}
