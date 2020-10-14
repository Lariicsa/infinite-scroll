import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};

const baseURL = () => {
  (axios.defaults.baseURL = "https://sampleapis.com/futurama/api"), headers;
};

const RICKANDMORTY_SERVICE = axios.create(baseURL());
const GET_DIMENSION = "/characters";

const characterInfo = (idCharacter) => RICKANDMORTY_SERVICE.get(GET_DIMENSION+idCharacter);
const characterAll = () => RICKANDMORTY_SERVICE.get(GET_DIMENSION);

export { characterInfo, characterAll };

