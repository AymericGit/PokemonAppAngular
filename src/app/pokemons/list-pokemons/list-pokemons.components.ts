import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemons/pokemons';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';

import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
    selector: "list-pokemons",
    templateUrl: "./list-pokemons.components.html"
})
export class PokemonComponent implements OnInit {
  
    pokemons: Pokemon[];

    constructor(private router: Router, private pokemonsService: PokemonsService) {
        this.pokemons = [];
    }

    ngOnInit() {
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon) {
        let link = ['pokemon', pokemon.id];
        this.router.navigate(link);
    }

    addPokemon(){
        let link = ['pokemon/new'];
        this.router.navigate(link)
    }
}