import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemons';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';

import { ActivatedRoute, Router } from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemonUrl: any;
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService, private _sanitizer: DomSanitizer){
  }

  ngOnInit(){
    let id = +this.route.snapshot.params.id;
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.pokemonsService.goBack(null);
  }

  goEdit(pokemon: Pokemon) {
    let link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link);
}

  goDelete(pokemon: Pokemon){
      this.pokemonsService.deletePokemon(pokemon).subscribe(pokemon => this.pokemon = pokemon)
      this.router.navigate(['pokemon/all']);
  }

}
