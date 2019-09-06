import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _heroesService: HeroesService,
              ) {
    this.activatedRoute.params.subscribe( params => {
      // Forma más segura de acceder al id que con params.id;
     // debe coincidir con el path que aparece en app.routes.ts, cte. APP_ROUTES
     this.heroes = this._heroesService.buscarHeroes( params[ 'termino' ] );
     this.termino = params[ 'termino'];
 });
  }

  ngOnInit() {
  }

  // verHeroe( idx: number ) {
  //   // console.log(idx);
  //   this.router.navigate( ['/heroe', idx] );
  // }

}
