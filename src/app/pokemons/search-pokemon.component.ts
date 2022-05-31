import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// RxJS 6
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { PokemonsService } from './pokemons.service';
import { Pokemon } from './donnees-pokemons/pokemons';

@Component({
	selector: 'pokemon-search',
	templateUrl: './search-pokemon.component.html'
})
export class PokemonSearchComponent implements OnInit {
	private searchTerms = new Subject<string>();
	pokemons: any;

	constructor(
		private pokemonsService: PokemonsService,
		private router: Router) { }

	
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.pokemons = this.searchTerms.pipe(
			// wait
			debounceTime(300),
			//  distinct search
			distinctUntilChanged(),
			// results
			switchMap((term: string) => this.pokemonsService.searchPokemons(term)),
		);
	}

	gotoDetail(pokemon: Pokemon): void {
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}
}
