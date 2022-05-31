export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    rarity: number;
    picture: string;
    types: Array<string>;
    created: Date;
    address: string;

    constructor() {
        this.id = 0;
        this.hp = 0;
        this.cp = 0;
        this.name = '';
        this.rarity = 1;
        this.picture = '';
        this.types = [];
        this.created = new Date();
        this.address = '';
    }

}
