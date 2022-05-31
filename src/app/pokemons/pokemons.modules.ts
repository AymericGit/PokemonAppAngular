import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonComponent } from './list-pokemons/list-pokemons.components';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { PokemonRoutingModule } from './pokemons-routing.modules';
import {LoaderComponent} from '../loader.component';
import { PokemonTypeRarityPipe } from './pipes/pokemon-type-rarity.pipe';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon.component';

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonTypeRarityPipe,
    PokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    NewPokemonComponent,
    PokemonSearchComponent,
    FormPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonsService],
  bootstrap: []
})
export class PokemonsModule { }
