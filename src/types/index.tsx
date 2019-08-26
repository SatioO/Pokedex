export interface IPokemon {
    name: string;
    url: string;
    index: number;
    featured: boolean;
}

export interface IPokemonDetails {
    name: string;
    order: number;
    base_experience: number;
    height: number;
    weight: number;
    id: number;
    abilities: IAbility[];
}

export interface IAbility {
    ability: {
        name: string;
        url: string;
    };
}
