import axios from "axios";

const API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})
// pokemon
export default API