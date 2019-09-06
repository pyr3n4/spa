import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService,
               private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string ) { // localiza
    console.log(termino);
    // redirección a otro componente
    this.router.navigate( ['/buscar', termino] );


    // con este termino se localiza el héroe con el servicio y el método buscarHeroes(termino)
    // this._heroesService.buscarHeroes( termino );
    // y lo mostrará en la página de héroe con el método verHeroe( idx ) del servicio
    // _heroesService.verHeroe( idx )
  }



}
