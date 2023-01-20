import { Template } from "./interfaces"

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
    constructor(name: string, amount: number, year: number, cost: string, color: string, producer: string, image: string, designer: string, type: string, isPopular: boolean, isInCart: boolean) {
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

 export const products: [string, number, number, string, string, string, string, string, string, boolean, boolean][] = [
  ["Chair Handkerchief", 4, 1980, '1100€', "blue", "KNOLL", "./assets/massimo.jpg", "Massimo and Vignelli", "chair", false, false],
  ["Chair Plia", 2, 1970, '300€', "metal", "CASTELLI", "./assets/plia.jpg", "Giancarlo Piretti", "chair", false, false],
  ["Composition 267", 2, 1988, '900€', "", "", "./assets/267.jpg", "Marcel Baugier", "composition", false, false],
  ["Chair Tulipe", 6, 1970, '1600€', "white", "KNOLL", "./assets/eero.jpg", "Eero Saarinen", "chair", false, false],
  ["Chair Pelikan", 1, 1990, '1850€', "metal", "FRITZ HANSEN", "./assets/pelikan.jpg", "Niels Gammelgaard & Lars Mathiesen", "chair", true, false],
  ["Composition 268", 2, 1988, '900€', "", "", "./assets/268.jpg", "Marcel Baugier", "composition", false, false],
  ["Armchair P40", 3, 1980, '275€', "red", "", "./assets/p40.jpg", "Giancarlo Venghi & Gianfranco Gualtierotti", "armchair", true, false],
  ["Chair Hammer", 12, 1974, '700€', "red", "FRITZ HANSEN", "./assets/hammer-red.jpg", "Arne Jaconsen", "chair", true, false],
  ["Table Roger Carpon", 1, 1950, '3000€', "black", "", "./assets/roger.jpg", "Roger Capron", "table", false, false],
  ["Chair B64", 4, 1950, '470€', "yellow", "KNOLL", "./assets/b64.jpg", "Marcel Breuer", "chair", true, false],
  ["Chair 4875", 1, 1950, '350€', "white", "KARTELL", "./assets/4875.jpg", "Carlo Bartoli", "chair", false, false],
  ["Chair Wassily", 1, 1970, '2870€', "black", "KNOLL", "./assets/wassily.jpg", "Marcel Breuer", "chair", true, false],
  ["Mirror 1813", 1, 1970, '60€', "green", "GILAC", "./assets/1813.jpg", "", "mirror", false, false],
  ["Chair Hаmmer", 2, 1974, '700€', "yellow", "FRITZ HANSEN", "./assets/hammer-yellow.jpg", "Arne Jaconsen", "chair", true, false],
  ["Lamp Tango", 1, 1980, '690€', "black", "ARTELUCE", "./assets/tango.jpg", "Stephen Copeland", "lamp", false, false],
  ["Chair mg5", 2, 1970, '1480€', "white", "KNOLL", "./assets/mg5-white.jpg", "Marcel Breuer", "chair", true, false],
  ["Candleholder", 2, 1960, '40€', "metal", "DANSK", "./assets/candleholder.jpg", "Jens Harald Quistgaard", "candleholder", false, false],
  ["Chair B33", 1, 1970, '800€', "black", "KNOLL", "./assets/b33.jpg", "Marcel Breuer", "chair", true, false],
  ["Vase Koror", 2, 1950, '80€', "blue", "HOLMEGAARD", "./assets/koror.jpg", "Per Lutken", "vase", false, false],
  ["Chauffeuse Togo", 2, 1980, '8560€', "white", "LIGNE ROSET", "./assets/togo.jpg", "Mitchel Ducaroy", "chauffeuse", true, false],
  ["Armchair Modus", 1, 1970, '340€', "black", "TECNO", "./assets/modus.jpg", "OSVALDO BORSANI", "armchair", false, false],
  ["Chair мg5", 4, 1970, '1480€', "red", "KNOLL", "./assets/mg5-red.jpg", "Marcel Breuer", "chair", true, false],
  ["Lamp Philippe Rogier", 2, 1970, '270€', "metal", "OXAR", "./assets/philippe.jpg", "Philippe Rogier", "lamp", false, false],
  ["Chair DSS", 6, 1980, '845€', "blue", "VITRA", "./assets/dss.jpg", "CHARLES & RAY EAMES", "chair", false, false],
 ]

 if (localStorage.getItem("products") === null) {
  localStorage.setItem('products', JSON.stringify(products))
}
 

