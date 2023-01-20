import { Product } from "./products-list";
import { searchFilter } from "./search";

const list = document.querySelector('.products_list');



export function CreateCard(): void {

  (list as HTMLElement).innerHTML = "";
  const arr = searchFilter();
  if (arr.length < 1) {
    (list as HTMLElement).innerHTML = "Sorry, there are no products under your filters";
    }
  for (let i = 0; i < arr.length; i++) {
    const test = new Product(...arr[i])
  const card = document.createElement('div');
  card.classList.add("product-card");
  const img = document.createElement('div');
  img.classList.add('product-card_img');
  const addCard = document.createElement('div');
  addCard.classList.add('product-card_add');
  const addText = document.createElement('p');
  addText.classList.add('pruduct_add_text');
  const inf = document.createElement('div');
  inf.classList.add('product_inf');
  const cardName = document.createElement('h3');
  cardName.classList.add('h3', 'product_name');
  const cardCost = document.createElement('h4');
  cardCost.classList.add('h4');
  list?.append(card as unknown as HTMLElement);
  (card as unknown as HTMLElement).append(img as unknown as HTMLElement);
  (img as unknown as HTMLElement).append(addCard as unknown as HTMLElement);
  (addCard as unknown as HTMLElement).append(addText as unknown as HTMLElement);
  (card as unknown as HTMLElement).append(inf as unknown as HTMLElement);
  (inf as unknown as HTMLElement).append(cardName as unknown as HTMLElement);
  (inf as unknown as HTMLElement).append(cardCost as unknown as HTMLElement);
  (addText as unknown as HTMLElement).textContent = 'ADD TO CART';
  (cardName as unknown as HTMLElement).innerHTML = test.name;
  (cardCost as unknown as HTMLElement).innerHTML = test.cost;
  (img as unknown as HTMLElement).style.background = `url('${test.image}')`;
  (img as unknown as HTMLElement).style.backgroundSize = 'cover';
  (img as unknown as HTMLElement).style.backgroundPosition = 'center';

  const mark = document.createElement('div');
  if (test.isInCart === true) {
    mark.classList.add('product_added');
    mark.textContent = 'In Cart';
    img.append(mark);
  }
}
}




  let arrChecked: string[] = []
  const arrOfInputs = document.querySelectorAll('.checkbox');

  if (localStorage.getItem("saveChecked") !== null) {
    arrChecked = JSON.parse(localStorage.saveChecked);
    console.log(arrOfInputs)
  }

  arrOfInputs.forEach(e => {
   for (let i = 0; i < arrChecked.length; i++) {
    if (e.id === arrChecked[i]) {
      (e as HTMLInputElement).checked = true;
    }
   }
  })


