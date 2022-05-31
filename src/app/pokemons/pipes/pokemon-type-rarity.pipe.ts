import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche le nom correspondant au niveau de rareté du pokémon.
*/
@Pipe({name: 'pokemonTypeRarity'})
export class PokemonTypeRarityPipe implements PipeTransform {
  transform(level: number): string {
  
    let name: string;
  
    switch (level) {
      case 1:
        name = 'Commun';
        break;
      case 2:
        name = 'Peu commun';
        break;
      case 3:
        name = 'Rare';
        break;
      case 4:
        name = 'Rare holographique';
        break
      case 5:
        name = 'Rare triple star';
        break
      default:
        name = 'Ultra rare';
        break;
    }
    return name;
  }
}
