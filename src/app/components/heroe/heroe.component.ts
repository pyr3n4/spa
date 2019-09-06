// Hemos prescindido de OnInit para obtener el id por URL
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'; // Importamos el servicio


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  // Objeto Heroe para mostrar en el template
    heroe: any = {};
    mostrarMarvel = true;
    MostrarDC = true;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
         // Forma más segura de acceder al id que con params.id;
        // debe coincidir con el path que aparece en app.routes.ts, cte. APP_ROUTES
        this.heroe = this._heroesService.getHeroe( params[ 'id' ] );
        // console.log(this.heroe);
    });

    }


}
