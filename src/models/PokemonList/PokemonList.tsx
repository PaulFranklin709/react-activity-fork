import { FormEvent, useState } from "react";
import { Pokemon } from "../../Pokemon";
import axios from "axios"
import { PokemonAPI } from "../../PokemonAPI";

export function PokemonList() {
    const [listOfPokemons, setListPoke] = useState<Pokemon[]>([]);

    const newPokemon: Pokemon = {
        name: "",
        level: 0,
        health: 0,
        damage: 0,
        img: ""
    }

    const removePokemon: Pokemon = {
        name: "",
        level: 0,
        health: 0,
        damage: 0,
        img: ""
    }

    function onSubmitP(e: FormEvent) {
        e.preventDefault();
        console.log(listOfPokemons);

        axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name}`)
        .then(response => {
            console.log(response.data);
            let myPoke:Pokemon = {
                name: response.data.name,
                level: response.data.level ? response.data.level : 0,
                health: response.data.stats[0].base_stat,
                damage: response.data.stats[1].base_stat,
                img: response.data.sprites.front_default
            }
            listOfPokemons?.push(myPoke);
            setListPoke(listOfPokemons);
        });
    }
    function setNameP(event: React.ChangeEvent<HTMLInputElement>) {
        newPokemon.name = event.target.value;
    }
    function setRemoveName(event: React.ChangeEvent<HTMLInputElement>) {
        removePokemon.name = event.target.value;
    }
    function remove() {
        
    }
    return (
    <div>
        {/* <h2>Pokemon List</h2> */}
        <h3>Add Pokemon via PokeAPI</h3>

        {/* <div className="grid-Pokemon" onSubmit={onSubmitP}>
        </div> */}
        <form className="grid-Pokemon" onSubmit={onSubmitP}>
            <input onChange={setNameP} placeholder="Name" />
            <button>API</button>
        </form>
        {
            listOfPokemons.map((r) => (
                <div>{r.name}</div>
            ))
        }
        <form className="grid-Pokemon" onSubmit={remove}>
            <input onChange={setRemoveName} placeholder="Name" />
            <button>Remove</button>
        </form>
    </div>);
}