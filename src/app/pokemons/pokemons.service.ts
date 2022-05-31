import { Injectable } from '@angular/core';
import { POKEMONS } from './donnees-pokemons/mock-pokemons';
import { Pokemon } from './donnees-pokemons/pokemons';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PokemonsService{

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){}

    private pokemonsUrl = 'api/pokemons';

    private log(log: string){
        console.info(log)
    }

    private handleError<T>(operation= 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }

    getPokemons(): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_ => this.log('fetched pokemons')),
            catchError(this.handleError('getPokemons', []))
        )
    }

    getPokemon(id : number): Observable<Pokemon>{
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id = ${id}`)),
            catchError( this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon>{
        const httpOptions = {
            headers: new HttpHeaders({'Content-type':'application/json'})
        };
        return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`added pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('addPokemon'))
        )
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon>{
        const httpOptions = {
            headers: new HttpHeaders({'Content-type':'application/json'})
        };
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        )
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon>{
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'Content-type':'application/json'})
        };
        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap(_ => this.log(`delete pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        )
    }

    // deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
	// 	const url = `${this.pokemonsUrl}/${pokemon.id}`;
	// 	const httpOptions = {
	// 		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	// 	};

	// 	return this.http.delete<Pokemon>(url, httpOptions).pipe(
	// 		tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
	// 		catchError(this.handleError<Pokemon>('deletePokemon'))
	// 	);
	// }

    /* GET pokemons search */
	searchPokemons(term: string): Observable<Pokemon[]> {
		if (!term.trim()) {
			// si le terme de recherche n'existe pas, on renvoie un tableau vide.
			return of([]);
		}

		return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
			tap(_ => this.log(`found pokemons matching "${term}"`)),
			catchError(this.handleError<Pokemon[]>('searchPokemons', []))
		);
	}


    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
    }

    goBack(pokemon: any):void{
        if(pokemon){
            let link = ['/pokemon',pokemon.id]; 
            this.router.navigate(link)
        }else{
            this.router.navigate(['/pokemon/all']);
        }
    }
}