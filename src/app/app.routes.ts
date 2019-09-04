import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroe/:nombre', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

// exportar
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// Opción de usar hashing, para que Angular gestione las rutas de la forma 'dominio/#/path'
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });


/* @NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {} */
