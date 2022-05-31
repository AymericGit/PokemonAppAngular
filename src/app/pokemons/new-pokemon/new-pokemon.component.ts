import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemons';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';

import { ActivatedRoute, Router } from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
    selector: "new-pokemon",
    templateUrl: "./new-pokemon.component.html"
})
export class NewPokemonComponent implements OnInit {
    pokemon: any = null;
    pokemons: Pokemon[];

    constructor(private route: ActivatedRoute, private router: Router,private pokemonsService: PokemonsService){
        this.pokemons = [];

    }
  
    ngOnInit(){
        this.pokemon = new Pokemon()
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
       
    }

}   