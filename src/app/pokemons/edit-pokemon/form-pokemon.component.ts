import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component ({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})
export class FormPokemonComponent {
  types:any = [];
  @Input() pokemon:any;

  constructor(private route: ActivatedRoute, private router: Router, private PokemonsService: PokemonsService){
  }

  ngOnInit() {
    this.types = this.PokemonsService.getPokemonTypes();
  }

  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }

  isTypesValid(type: string): boolean {

    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  selectType($event: any, type: string): void {
    let checked = $event.target.checked;

    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);

      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  onSubmit():void {
    
    this.PokemonsService.updatePokemon(this.pokemon).subscribe(() => this.goBack());
  }

  goBack(): void{
    this.PokemonsService.goBack(this.pokemon)
  }

}