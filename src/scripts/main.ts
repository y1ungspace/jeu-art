// import '../styles/main.scss';
// import { CreateCard } from './loader';

// import '../assets/img/massimo.jpg';
// import '../assets/img/plia.jpg';
// import '../assets/img/267.jpg';
// import '../assets/img/eero.jpg';
// import '../assets/img/pelikan.jpg';
// import '../assets/img/268.jpg';
// import '../assets/img/p40.jpg';
// import '../assets/img/hammer-red.jpg';
// import '../assets/img/roger.jpg';
// import '../assets/img/wassily.jpg';
// import '../assets/img/4875.jpg';
// import '../assets/img/b64.jpg';
// import '../assets/img/tango.jpg';
// import '../assets/img/hammer-yellow.jpg';
// import '../assets/img/1813.jpg';
// import '../assets/img/mg5-white.jpg';
// import '../assets/img/b33.jpg';
// import '../assets/img/togo.jpg';
// import '../assets/img/candleholder.jpg';
// import '../assets/img/koror.jpg';
// import '../assets/img/modus.jpg';
// import '../assets/img/mg5-red.jpg';
// import '../assets/img/philippe.jpg';
// import '../assets/img/dss.jpg';

// import '../assets/icons/close.svg'
// import '../assets/icons/add.svg'
// import '../assets/icons/arrow.svg'
// import '../assets/icons/close.svg'
// import '../assets/icons/facebook.svg'
// import '../assets/icons/github.svg'
// import '../assets/icons/inst.svg'
// import '../assets/icons/rs_school_js.svg'
// import '../assets/icons/shopping-cart 1.svg'
// import '../assets/icons/twitter-1.svg'
// import '../assets/icons/twitter.svg'
// import '../assets/icons/Icon color-1.svg'
// import '../assets/icons/Icon color.svg'




// import { addTocart } from './cart';
// import { showWindow } from './window';



// CreateCard()


// document.addEventListener("keydown", () => {
//   window.setTimeout(CreateCard, 10);
// });

// document.querySelector(".filter_shop-by")?.addEventListener('input', () => {
//   window.setTimeout(CreateCard, 10);
// });

// document.addEventListener('click' , (event) => {
//   if ((event.target as HTMLElement).classList.contains('product-card_add') || 
//   (event.target as HTMLElement).classList.contains('pruduct_add_text') ||
//   (event.target as HTMLElement).classList.contains('product_window_button') ||
//   (event.target as HTMLElement).classList.contains('product_window_button_focus')) {
//     addTocart(event.target as Element);
//   }
// });

// document.addEventListener('click' , (event) => {
//   if ((event.target as HTMLElement).classList.contains('product-card_img')) {
//     showWindow(event.target);
//   }
// });


// document.addEventListener('click' , (event) => {
//   if ((event.target as HTMLElement).classList.contains('checkbox') || (event.target as HTMLElement).classList.contains('checkbox_label')) {
//     window.setTimeout(CreateCard, 10);
//   }
// });

// document.addEventListener('click' , (event) => {
//   if ((event.target as HTMLElement).classList.contains('slider-click')) {
//     (event.target as HTMLElement).classList.toggle('checked');
//     (event.target as HTMLElement).classList.contains('checked')? localStorage.setItem('popularChecked', JSON.stringify(true)) : 
//     localStorage.setItem('popularChecked', JSON.stringify(false));
//     CreateCard();
//   }
// });

// document.addEventListener('click' , (event) => {
//   if ((event.target as HTMLElement).classList.contains('filter_search_button')) {
//     (document.querySelector(".filter_search") as HTMLInputElement).value = "";
//     CreateCard();
//   }
// });

// document.querySelectorAll(".thumb")[0].addEventListener('mouseup', () => {
//   window.setTimeout(CreateCard, 10);
// });

// document.querySelectorAll(".thumb")[1].addEventListener('mouseup', () => {
//   window.setTimeout(CreateCard, 10);
// });

// document.querySelectorAll(".thumb1")[0].addEventListener('mouseup', () => {
//   window.setTimeout(CreateCard, 10);
// });

// document.querySelectorAll(".thumb1")[1].addEventListener('mouseup', () => {
//   window.setTimeout(CreateCard, 10);
// });

// document.querySelector(".filter_reset")!.addEventListener('click', () => {
//   localStorage.removeItem( "theValue");
//   localStorage.removeItem( "saveChecked");
//   localStorage.removeItem( "theValue1");
//   localStorage.removeItem( "popularChecked");
//   localStorage.removeItem("shopBy");
// });