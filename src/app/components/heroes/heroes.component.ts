import { Component, OnInit } from '@angular/core';
// Importamos el servicio y la interfaz Heroe
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
// Array de tipo Heroe
  heroes: Heroe[] = [];

  // Le pasamos el servicio como parámetro del constructor
  // tslint:disable-next-line: variable-name
    constructor( private _heroesService: HeroesService,
                 private router: Router ) {
    // console.log('Soy el constructor.');
  }

  ngOnInit() {
    // console.log('Soy el ngOnInit');

    this.heroes = this._heroesService.getHeroes();

    // console.log(this.heroes);
  }

  verHeroe( idx: number ) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}
