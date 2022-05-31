import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemons';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';

import { ActivatedRoute, Router } from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
    selector: "edit-pokemons",
    templateUrl: "./edit-pokemon.component.html"
})
export class EditPokemonComponent implements OnInit {
    pokemon: any = null;
  
    constructor(private route: ActivatedRoute, private router: Router,private PokemonsService: PokemonsService){
    }
  
    ngOnInit(){
        let id = +this.route.snapshot.params.id;
        this.PokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }
}   