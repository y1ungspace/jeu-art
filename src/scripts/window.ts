
export function showWindow(target: EventTarget | null) {

  const products = JSON.parse(localStorage.products);
  if (document.querySelector('.product_window_close')) {
    (document.querySelector('.product_window') as HTMLElement).remove();
    const html = document.querySelector('html');
    html!.style.overflowY = 'scroll';
    return;
  }

  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('product_window');
  const close = document.createElement('button');
  close.classList.add('product_window_close');
  const wrapper = document.createElement('div');
  wrapper.classList.add('product_window_wrapper');
  const img = document.createElement('div');
  img.classList.add('product_window_img');
  const text = document.createElement('div');
  text.classList.add('product_window_text');
  const h2 = document.createElement('h2');
  h2.classList.add('product_window_heading');
  const h4 = document.createElement('h4');
  h4.classList.add('h4');
  const description = document.createElement('p');
  description.classList.add('product_window_description');
  const button = document.createElement('button');
  button.classList.add('product_window_button');
  button.classList.add('.product_window_button_js');
  const designer = document.createElement('p');
  designer.classList.add('product_window_category');
  const year = document.createElement('p');
  year.classList.add('product_window_category');
  const producer = document.createElement('p');
  producer.classList.add('product_window_category');
  const color = document.createElement('p');
  color.classList.add('product_window_category');
  const amount = document.createElement('p');
  amount.classList.add('product_window_category');

  const html = document.querySelector('html');
  html!.style.overflowY = 'hidden';

  (main as HTMLElement).append((section as unknown as HTMLElement));
  (section as unknown as HTMLElement).append((close as unknown as HTMLElement));
  (section as unknown as HTMLElement).append((wrapper as unknown as HTMLElement));
  (wrapper as unknown as HTMLElement).append((img as unknown as HTMLElement));
  (wrapper as unknown as HTMLElement).append((text as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((h2 as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((h4 as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((description as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((button as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((designer as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((year as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((producer as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((color as unknown as HTMLElement));
  (text as unknown as HTMLElement).append((amount as unknown as HTMLElement));


  const name = (target as Node).nextSibling!.firstChild?.textContent;
  let arr: [string, number, number, string, string, string, string, string, string, boolean, boolean?] = ['', 0, 0, '', '', '', '', '', '', true];
  products.forEach((e: [string, number, number, string, string, string, string, string, string, boolean, (boolean | undefined)?]) => {
    if (e[0] === name) {
      arr = e;
    }
  });

  (img as unknown as HTMLElement).style.background = `url(${arr[6]})`;
  (img as unknown as HTMLElement).style.backgroundSize = 'cover';
  (img as unknown as HTMLElement).style.backgroundPosition = 'center';
  (h2 as unknown as HTMLElement).textContent = `${arr[0]}`;
  (h4 as unknown as HTMLElement).textContent = `${arr[3]}`;
  if (arr[10] === true) {
    (button as unknown as HTMLElement).textContent = `IN CART`;
    button.classList.toggle('product_window_button');
    button.classList.toggle('product_window_button_focus');
  } else {
    (button as unknown as HTMLElement).textContent = `ADD TO CART`;
  }
  (description as unknown as HTMLElement).textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.`;
  (designer as unknown as HTMLElement).textContent = `DESIGNER: ${arr[7]}`;
  (year as unknown as HTMLElement).textContent = `YEAR: ${arr[2]}`;
  (producer as unknown as HTMLElement).textContent = `PRODUCER: ${arr[5]}`;
  (color as unknown as HTMLElement).textContent = `COLOR: ${arr[4]}`;
  (amount as unknown as HTMLElement).textContent = `Items in stock: 20`;
  (close as unknown as HTMLElement).style.background = `url('./assets/close.svg')`;
  (close as unknown as HTMLElement).style.backgroundSize = 'cover';
  (close as unknown as HTMLElement).style.backgroundPosition = 'center';
}

document.addEventListener('click' , (event) => {
  if ((event.target as HTMLElement).classList.contains('product_window_close')) {
    showWindow(event.target);
  }
});

