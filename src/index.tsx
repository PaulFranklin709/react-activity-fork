import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter/Counter';
import { Pokemon } from './Pokemon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { PokemonList } from './models/PokemonList/PokemonList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// let pokemon:Pokemon = {
//   damage: 20,
//   health: 100,
//   img: "sprite",
//   level: 3,
//   name: "Ditto"
// }

// let listOfPokemons:Pokemon[] = [
//   {
//     damage: 20,
//     health: 100,
//     img: "sprite",
//     level: 2,
//     name: "Pika"
//   },
//   {
//     damage: 10,
//     health: 400,
//     img: "sprite",
//     level: 5,
//     name: "random"
//   }
// ]

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokeList" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
    <Counter />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
