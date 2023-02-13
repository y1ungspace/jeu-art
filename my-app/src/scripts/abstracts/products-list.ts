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
    cost: string;
    color: string;
    producer: string;
    image: string;
    designer: string;
    type: string;
    isPopular: boolean;
    isInCart: boolean;
    constructor(name: string, amount: number, year: number, cost: string, color: string, producer: string, 
      image: string, designer: string, type: string, isPopular: boolean, isInCart: boolean) {
      this.name = name;
      this.amount = amount;
      this.year = year;
      this.cost = cost;
      this.color = color;
      this.producer = producer;
      this.image = image;
      this.designer = designer;
      this.type = type;
      this.isPopular = isPopular;
      this.isInCart = isInCart;
    }
 }

 export const products: Product[] = [
  {
    name: "Chair Handkerchief",
    amount: 4,
    year: 1980,
    cost: '1100€',
    color: "blue",
    producer: "KNOLL",
    image: imgMassimo,
    designer: "Massimo and Vignelli",
    type: "chair",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair Plia",
    amount: 2,
    year: 1970,
    cost: '300€',
    color: "metal",
    producer: "CASTELLI",
    image: imgPlia,
    designer: "Giancarlo Piretti",
    type: "chair",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Composition 267",
    amount: 2,
    year: 1988,
    cost: '900€',
    color: "",
    producer: "",
    image: img267,
    designer: "Marcel Baugier",
    type: "composition",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair Tulipe",
    amount: 6,
    year: 1970,
    cost: '1600€',
    color: "white",
    producer: "KNOLL",
    image: imgEero,
    designer: "Eero Saarinen",
    type: "chair",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair Pelikan",
    amount: 1,
    year: 1990,
    cost: '1850€',
    color: "metal",
    producer: "FRITZ HANSEN",
    image: imgPelikan,
    designer: "Niels Gammelgaard & Lars Mathiesen",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Composition 268",
    amount: 1,
    year: 1988,
    cost: '900€',
    color: "",
    producer: "",
    image: img268,
    designer: "Marcel Baugier",
    type: "composition",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Armchair P40",
    amount: 3,
    year: 1980,
    cost: '1850€',
    color: "red",
    producer: "",
    image: imgP40,
    designer: "Giancarlo Venghi & Gianfranco Gualtierotti",
    type: "armchair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Chair Hammer",
    amount: 12,
    year: 1974,
    cost: '700€',
    color: "red",
    producer: "FRITZ HANSEN",
    image: imgHammerRed,
    designer: "Arne Jaconsen",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Table Roger Carpon",
    amount: 1,
    year: 1950,
    cost: '3000€',
    color: "black",
    producer: "",
    image: imgRoger,
    designer: "Arne Jaconsen",
    type: "table",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair B64",
    amount: 4,
    year: 1950,
    cost: '470€',
    color: "yellow",
    producer: "KNOLL",
    image: imgB64,
    designer: "Marcel Breuer",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Chair 4875",
    amount: 1,
    year: 1950,
    cost: '350€',
    color: "white",
    producer: "KARTELL",
    image: img4875,
    designer: "Carlo Bartoli",
    type: "chair",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair Wassily",
    amount: 1,
    year: 1970,
    cost: '2870€',
    color: "black",
    producer: "KNOLL",
    image: imgWassily,
    designer: "Marcel Breuer",
    type: "armchair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Mirror 1813",
    amount: 1,
    year: 1970,
    cost: '60€',
    color: "green",
    producer: "GILAC",
    image: img1813,
    designer: "",
    type: "mirror",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair Hаmmer",
    amount: 2,
    year: 1974,
    cost: '700€',
    color: "yellow",
    producer: "FRITZ HANSEN",
    image: imgHammerYellow,
    designer: "Arne Jaconsen",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Lamp Tango",
    amount: 1,
    year: 1980,
    cost: '690€',
    color: "black",
    producer: "ARTELUCE",
    image: imgTango,
    designer: "Stephen Copeland",
    type: "lamp",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair mg5",
    amount: 2,
    year: 1970,
    cost: '1480€',
    color: "white",
    producer: "KNOLL",
    image: imgMg5White,
    designer: "Marcel Breuer",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Candleholder",
    amount: 2,
    year: 1960,
    cost: '40€',
    color: "metal",
    producer: "DANSK",
    image: imgCandeleholder,
    designer: "Jens Harald Quistgaard",
    type: "candleholder",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair B33",
    amount: 1,
    year: 1970,
    cost: '800€',
    color: "black",
    producer: "KNOLL",
    image: imgB33,
    designer: "Marcel Breuer",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Vase Koror",
    amount: 2,
    year: 1950,
    cost: '80€',
    color: "blue",
    producer: "HOLMEGAARD",
    image: imgKoror,
    designer: "Per Lutken",
    type: "vase",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chauffeuse Togo",
    amount: 2,
    year: 1980,
    cost: '8560€',
    color: "white",
    producer: "LIGNE ROSET",
    image: imgTogo,
    designer: "Mitchel Ducaroy",
    type: "chauffeuse",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Armchair Modus",
    amount: 1,
    year: 1970,
    cost: '340€',
    color: "black",
    producer: "TECNO",
    image: imgModus,
    designer: "OSVALDO BORSANI",
    type: "armchair",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair мg5",
    amount: 4,
    year: 1970,
    cost: '1480€',
    color: "red",
    producer: "KNOLL",
    image: imgMg5Red,
    designer: "Marcel Breuer",
    type: "chair",
    isPopular: true,
    isInCart:  false,
  },
  {
    name: "Lamp Philippe Rogier",
    amount: 2,
    year: 1970,
    cost: '270€',
    color: "metal",
    producer: "OXAR",
    image: imgPhilippe,
    designer: "Marcel Breuer",
    type: "lamp",
    isPopular: false,
    isInCart:  false,
  },
  {
    name: "Chair DSS",
    amount: 6,
    year: 1980,
    cost: '845€',
    color: "blue",
    producer: "VITRA",
    image: imgDSS,
    designer: "CHARLES & RAY EAMES",
    type: "chair",
    isPopular: false,
    isInCart:  false,
  },
 ]

 if (localStorage.getItem("products") === null) {
  localStorage.setItem('products', JSON.stringify(products))
}
 

