import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './list-pokemons/list-pokemons.components';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';

const pokemonsRoutes: Routes = [
{
    path: 'pokemon',
    children: [
        { path: 'all', component: PokemonComponent },
        { path: 'new', component: NewPokemonComponent },
        { path: ':id', component: DetailPokemonComponent},
        { path: 'edit/:id', component: EditPokemonComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
