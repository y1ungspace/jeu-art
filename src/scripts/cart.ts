import { CreateCard } from "./loader";

let numberInCart = 0;

export function addTocart(target: Element): void {
  const products = JSON.parse(localStorage.products);
  if (localStorage.getItem("numberInCart") !== null) {
    numberInCart = JSON.parse(localStorage.numberInCart);
  }

  if (target.classList.contains('product_window_button') ||
  target.classList.contains('product_window_button_focus')) {
    const name = document.querySelector('.product_window_heading')?.textContent;
    products.forEach((e: [string, number, number, string, string, string, string, string, string, boolean, boolean?]) => {
      if (e[0] === name) {
        target.classList.toggle('product_window_button');
        target.classList.toggle('product_window_button_focus');
        if (e[10] === false) {
          e[10] = true;
          target.textContent = 'IN CART'
        } else {
          e[10] = false;
          target.textContent = 'ADD TO CART'
          numberInCart = numberInCart - 2;
        }
      }
    });
  }

  if (numberInCart === 20) {
    alert("Sorry, you can't add more than 20 items in your cart\n Please clean it before adding new items");
    return;
  }

  numberInCart++;

  if (target.classList.contains('pruduct_add_text') ||
  target.classList.contains('product-card_add')) {
    let img = target.parentNode as HTMLElement;
    if (target.classList.contains('pruduct_add_text')) {
      img = target.parentNode?.parentNode as HTMLElement;
    }
    if (img.querySelector('.product_added')) {
      alert('This item is already added to your cart');
      return;
    }
    const mark = document.createElement('div');
    mark.classList.add('product_added');
    mark.textContent = 'In Cart';
    img.append(mark);

    const name = img.nextSibling!.firstChild?.textContent;
    products.forEach((e: [string, number, number, string, string, string, string, string, string, boolean, boolean?]) => {
    if (e[0] === name) {
      e[10] = true;
    }
    });
  } 
  
  localStorage.products = JSON.stringify(products);
  window.setTimeout(CreateCard, 10);

  (document.querySelector('.header_cart-notification_counter') as unknown as HTMLElement).textContent = `Items in the cart: ${numberInCart}`;
  (document.querySelector('.header_cart-notification') as unknown as HTMLElement).style.transform = "none";
  (document.querySelector('.header') as unknown as HTMLElement).style.borderBottom = "2px solid rgba(161, 138, 104, 1)"
  window.setTimeout(() => {
  (document.querySelector('.header_cart-notification') as unknown as HTMLElement).style.transform = "translateY(-68px)";
  (document.querySelector('.header') as unknown as HTMLElement).style.borderBottom = "1px solid rgba(216, 216, 216, 1)"
}, 5000)

  localStorage.numberInCart = JSON.stringify(numberInCart);
}

