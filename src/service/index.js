import axios from "axios";
const headers = {
  "content-Type": "application/json",
  accept: "application/json",
};

const baseURL = () => {
  (axios.defaults.baseURL = "https://api.sampleapis.com/futurama"), headers;
};

const FUTURAMA_SERVICE = axios.create(baseURL());
const GET_DIMENSION = "/characters";

const characterInfo = (idCharacter) => FUTURAMA_SERVICE.get(GET_DIMENSION+idCharacter);
const characterAll = () => FUTURAMA_SERVICE.get(GET_DIMENSION);

export { characterInfo, characterAll };

