import { Template } from "./interfaces"

import img267 from "../../assets/images/267.jpg";
import img268 from "../../assets/images/268.jpg";
import img1813 from "../../assets/images/1813.jpg";
import img4875 from "../../assets/images/4875.jpg";
import imgB33 from "../../assets/images/b33.jpg";
import imgB64 from "../../assets/images/b64.jpg";
import imgCandeleholder from "../../assets/images/candleholder.jpg";
import imgDSS from "../../assets/images/dss.jpg";
import imgEero from "../../assets/images/eero.jpg";
import imgHammerRed from "../../assets/images/hammer-red.jpg";
import imgHammerYellow from "../../assets/images/hammer-yellow.jpg";
import imgKoror from "../../assets/images/koror.jpg";
import imgMassimo from "../../assets/images/massimo.jpg";
import imgMg5Red from "../../assets/images/mg5-red.jpg";
import imgMg5White from "../../assets/images/mg5-white.jpg";
import imgModus from "../../assets/images/modus.jpg";
import imgP40 from "../../assets/images/p40.jpg";
import imgPelikan from "../../assets/images/pelikan.jpg";
import imgPhilippe from "../../assets/images/philippe.jpg";
import imgPlia from "../../assets/images/plia.jpg";
import imgRoger from "../../assets/images/roger.jpg";
import imgTango from "../../assets/images/tango.jpg";
import imgTogo from "../../assets/images/togo.jpg";
import imgWassily from "../../assets/images/wassily.jpg";

 export class Product implements Template {
    name: string;
    amount: number;
    year: number;
    cost: number;
    color: string;
    producer: string;
    image: string;
    designer: string;
    type: string;
    popularity: number;
    isInCart: boolean;
    constructor(name: string, amount: number, year: number, cost: number, color: string, producer: string, 
      image: string, designer: string, type: string, popularity: number, isInCart: boolean) {
      this.name = name;
      this.amount = amount;
      this.year = year;
      this.cost = cost;
      this.color = color;
      this.producer = producer;
      this.image = image;
      this.designer = designer;
      this.type = type;
      this.popularity = popularity;
      this.isInCart = isInCart;
    }
 }

 export const products: Product[] = [  //TODO: add id and image array and color array
  {
    name: "Handkerchief",
    amount: 4,
    year: 1980,
    cost: 1100,
    color: "blue",
    producer: "KNOLL",
    image: imgMassimo,
    designer: "Massimo and Vignelli",
    type: "armchair",
    popularity: 105,
    isInCart:  false,
  },
  {
    name: "Plia",
    amount: 2,
    year: 1970,
    cost: 300,
    color: "metal",
    producer: "CASTELLI",
    image: imgPlia,
    designer: "Giancarlo Piretti",
    type: "chair",
    popularity: 27,
    isInCart:  false,
  },
  {
    name: "267",
    amount: 2,
    year: 1988,
    cost: 900,
    color: "",
    producer: "",
    image: img267,
    designer: "Marcel Baugier",
    type: "composition",
    popularity: 20,
    isInCart:  false,
  },
  {
    name: "Tulipe",
    amount: 6,
    year: 1970,
    cost: 1600,
    color: "white",
    producer: "KNOLL",
    image: imgEero,
    designer: "Eero Saarinen",
    type: "chair",
    popularity: 84,
    isInCart:  false,
  },
  {
    name: "Pelikan",
    amount: 4,
    year: 1990,
    cost: 1850,
    color: "metal",
    producer: "FRITZ HANSEN",
    image: imgPelikan,
    designer: "Niels Gammelgaard & Lars Mathiesen",
    type: "chair",
    popularity: 35,
    isInCart:  false,
  },
  {
    name: "268",
    amount: 1,
    year: 1988,
    cost: 900,
    color: "",
    producer: "",
    image: img268,
    designer: "Marcel Baugier",
    type: "composition",
    popularity: 24,
    isInCart:  false,
  },
  {
    name: "P40",
    amount: 3,
    year: 1980,
    cost: 1850,
    color: "red",
    producer: "",
    image: imgP40,
    designer: "Giancarlo Venghi & Gianfranco Gualtierotti",
    type: "armchair",
    popularity: 405,
    isInCart:  false,
  },
  {
    name: "Hammer",
    amount: 12,
    year: 1974,
    cost: 700,
    color: "red",
    producer: "FRITZ HANSEN",
    image: imgHammerRed,
    designer: "Arne Jaconsen",
    type: "chair",
    popularity: 41,
    isInCart:  false,
  },
  {
    name: "Roger Carpon",
    amount: 1,
    year: 1950,
    cost: 3000,
    color: "black",
    producer: "",
    image: imgRoger,
    designer: "Arne Jaconsen",
    type: "table",
    popularity: 55,
    isInCart:  false,
  },
  {
    name: "B64",
    amount: 4,
    year: 1950,
    cost: 470,
    color: "yellow",
    producer: "KNOLL",
    image: imgB64,
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 63,
    isInCart:  false,
  },
  {
    name: "4875",
    amount: 1,
    year: 1950,
    cost: 350,
    color: "white",
    producer: "KARTELL",
    image: img4875,
    designer: "Carlo Bartoli",
    type: "chair",
    popularity: 54,
    isInCart:  false,
  },
  {
    name: "Wassily",
    amount: 1,
    year: 1970,
    cost: 2870,
    color: "black",
    producer: "KNOLL",
    image: imgWassily,
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 137,
    isInCart:  false,
  },
  {
    name: "1813",
    amount: 1,
    year: 1970,
    cost: 60,
    color: "green",
    producer: "GILAC",
    image: img1813,
    designer: "",
    type: "mirror",
    popularity: 34,
    isInCart:  false,
  },
  {
    name: "Hаmmer",
    amount: 2,
    year: 1974,
    cost: 700,
    color: "yellow",
    producer: "FRITZ HANSEN",
    image: imgHammerYellow,
    designer: "Arne Jaconsen",
    type: "chair",
    popularity: 56,
    isInCart:  false,
  },
  {
    name: "Tango",
    amount: 1,
    year: 1980,
    cost: 690,
    color: "black",
    producer: "ARTELUCE",
    image: imgTango,
    designer: "Stephen Copeland",
    type: "lamp",
    popularity: 40,
    isInCart:  false,
  },
  {
    name: "mg5",
    amount: 2,
    year: 1970,
    cost: 1480,
    color: "white",
    producer: "KNOLL",
    image: imgMg5White,
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 80,
    isInCart:  false,
  },
  {
    name: "",
    amount: 2,
    year: 1960,
    cost: 40,
    color: "metal",
    producer: "DANSK",
    image: imgCandeleholder,
    designer: "Jens Harald Quistgaard",
    type: "candleholder",
    popularity:57,
    isInCart:  false,
  },
  {
    name: "B33",
    amount: 1,
    year: 1970,
    cost: 800,
    color: "black",
    producer: "KNOLL",
    image: imgB33,
    designer: "Marcel Breuer",
    type: "chair",
    popularity: 81,
    isInCart:  false,
  },
  {
    name: "Koror",
    amount: 2,
    year: 1950,
    cost: 80,
    color: "blue",
    producer: "HOLMEGAARD",
    image: imgKoror,
    designer: "Per Lutken",
    type: "vase",
    popularity: 50,
    isInCart:  false,
  },
  {
    name: "Togo",
    amount: 2,
    year: 1980,
    cost: 8560,
    color: "white",
    producer: "LIGNE ROSET",
    image: imgTogo,
    designer: "Mitchel Ducaroy",
    type: "chauffeuse",
    popularity: 205,
    isInCart:  false,
  },
  {
    name: "Modus",
    amount: 1,
    year: 1970,
    cost: 340,
    color: "black",
    producer: "TECNO",
    image: imgModus,
    designer: "OSVALDO BORSANI",
    type: "armchair",
    popularity: 50,
    isInCart:  false,
  },
  {
    name: "мg5",
    amount: 4,
    year: 1970,
    cost: 1480,
    color: "red",
    producer: "KNOLL",
    image: imgMg5Red,
    designer: "Marcel Breuer",
    type: "armchair",
    popularity: 117,
    isInCart:  false,
  },
  {
    name: "Philippe Rogier",
    amount: 2,
    year: 1970,
    cost: 270,
    color: "metal",
    producer: "OXAR",
    image: imgPhilippe,
    designer: "Marcel Breuer",
    type: "lamp",
    popularity: 90,
    isInCart:  false,
  },
  {
    name: "DSS",
    amount: 6,
    year: 1980,
    cost: 845,
    color: "blue",
    producer: "VITRA",
    image: imgDSS,
    designer: "CHARLES & RAY EAMES",
    type: "chair",
    popularity: 59,
    isInCart:  false,
  },
  {
    name: "41701",
    amount: 6,
    year: 1977,
    cost: 122,
    color: "black",
    producer: "OSRAM",
    image: "https://www.dropbox.com/s/1r6kjrjqx62wv5m/302187540_145305161198015_8567532113954371301_n.jpg?raw=1",
    designer: "DIETTER WITTE",
    type: "lamp",
    popularity: 39,
    isInCart:  false,
  },
 ]

 if (localStorage.getItem("products") === null) {
  localStorage.setItem('products', JSON.stringify(products))
}
 

