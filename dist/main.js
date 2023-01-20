/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/cart.ts":
/*!*****************************!*\
  !*** ./src/scripts/cart.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTocart": () => (/* binding */ addTocart)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./src/scripts/loader.ts");

let numberInCart = 0;
function addTocart(target) {
    var _a, _b, _c;
    const products = JSON.parse(localStorage.products);
    if (localStorage.getItem("numberInCart") !== null) {
        numberInCart = JSON.parse(localStorage.numberInCart);
    }
    if (target.classList.contains('product_window_button') ||
        target.classList.contains('product_window_button_focus')) {
        const name = (_a = document.querySelector('.product_window_heading')) === null || _a === void 0 ? void 0 : _a.textContent;
        products.forEach((e) => {
            if (e[0] === name) {
                target.classList.toggle('product_window_button');
                target.classList.toggle('product_window_button_focus');
                if (e[10] === false) {
                    e[10] = true;
                    target.textContent = 'IN CART';
                }
                else {
                    e[10] = false;
                    target.textContent = 'ADD TO CART';
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
        let img = target.parentNode;
        if (target.classList.contains('pruduct_add_text')) {
            img = (_b = target.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
        }
        if (img.querySelector('.product_added')) {
            alert('This item is already added to your cart');
            return;
        }
        const mark = document.createElement('div');
        mark.classList.add('product_added');
        mark.textContent = 'In Cart';
        img.append(mark);
        const name = (_c = img.nextSibling.firstChild) === null || _c === void 0 ? void 0 : _c.textContent;
        products.forEach((e) => {
            if (e[0] === name) {
                e[10] = true;
            }
        });
    }
    localStorage.products = JSON.stringify(products);
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_0__.CreateCard, 10);
    document.querySelector('.header_cart-notification_counter').textContent = `Items in the cart: ${numberInCart}`;
    document.querySelector('.header_cart-notification').style.transform = "none";
    document.querySelector('.header').style.borderBottom = "2px solid rgba(161, 138, 104, 1)";
    window.setTimeout(() => {
        document.querySelector('.header_cart-notification').style.transform = "translateY(-68px)";
        document.querySelector('.header').style.borderBottom = "1px solid rgba(216, 216, 216, 1)";
    }, 5000);
    localStorage.numberInCart = JSON.stringify(numberInCart);
}


/***/ }),

/***/ "./src/scripts/loader.ts":
/*!*******************************!*\
  !*** ./src/scripts/loader.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCard": () => (/* binding */ CreateCard)
/* harmony export */ });
/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list */ "./src/scripts/products-list.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/scripts/search.ts");


const list = document.querySelector('.products_list');
function CreateCard() {
    list.innerHTML = "";
    const arr = (0,_search__WEBPACK_IMPORTED_MODULE_1__.searchFilter)();
    if (arr.length < 1) {
        list.innerHTML = "Sorry, there are no products under your filters";
    }
    for (let i = 0; i < arr.length; i++) {
        const test = new _products_list__WEBPACK_IMPORTED_MODULE_0__.Product(...arr[i]);
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
        list === null || list === void 0 ? void 0 : list.append(card);
        card.append(img);
        img.append(addCard);
        addCard.append(addText);
        card.append(inf);
        inf.append(cardName);
        inf.append(cardCost);
        addText.textContent = 'ADD TO CART';
        cardName.innerHTML = test.name;
        cardCost.innerHTML = test.cost;
        img.style.background = `url('${test.image}')`;
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        const mark = document.createElement('div');
        if (test.isInCart === true) {
            mark.classList.add('product_added');
            mark.textContent = 'In Cart';
            img.append(mark);
        }
    }
}
let arrChecked = [];
const arrOfInputs = document.querySelectorAll('.checkbox');
if (localStorage.getItem("saveChecked") !== null) {
    arrChecked = JSON.parse(localStorage.saveChecked);
    console.log(arrOfInputs);
}
arrOfInputs.forEach(e => {
    for (let i = 0; i < arrChecked.length; i++) {
        if (e.id === arrChecked[i]) {
            e.checked = true;
        }
    }
});


/***/ }),

/***/ "./src/scripts/products-list.ts":
/*!**************************************!*\
  !*** ./src/scripts/products-list.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product),
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
class Product {
    constructor(name, amount, year, cost, color, producer, image, designer, type, isPopular, isInCart) {
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
const products = [
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
];
if (localStorage.getItem("products") === null) {
    localStorage.setItem('products', JSON.stringify(products));
}


/***/ }),

/***/ "./src/scripts/search.ts":
/*!*******************************!*\
  !*** ./src/scripts/search.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchFilter": () => (/* binding */ searchFilter)
/* harmony export */ });
let products = JSON.parse(localStorage.products);
function searchFilter() {
    products = JSON.parse(localStorage.products);
    const arr = [];
    shopBy();
    const result = sortBy();
    for (let i = 0; i < result.length; i++) {
        if (result[i][0].toLocaleLowerCase().includes(`${document.querySelector(".filter_search").value.toLowerCase()}`)) {
            arr.push(result[i]);
        }
    }
    return arr;
}
function shopBy() {
    let value = document.querySelector(".filter_shop-by").value;
    if (localStorage.getItem("shopBy") !== null) {
        value = JSON.parse(localStorage.shopBy);
    }
    if (document.querySelector(".filter_shop-by").value !== 'Shop By') {
        value = document.querySelector(".filter_shop-by").value;
    }
    switch (value) {
        case 'Alphabetic: Ascending':
            products.sort((a, b) => a[0].localeCompare(b[0]));
            break;
        case 'Alphabetic: Descending':
            products.sort((b, a) => a[0].localeCompare(b[0]));
            break;
        case 'Year: Ascending':
            products.sort((a, b) => a[2] - b[2]);
            break;
        case 'Year: Descending':
            products.sort((b, a) => a[2] - b[2]);
            break;
        default: '';
    }
    localStorage.shopBy = JSON.stringify(value);
}
const inputsRy = {
    sliderWidth: 200,
    minRange: 0,
    maxRange: 8560,
    outputWidth: 30,
    thumbWidth: 10,
    thumbBorderWidth: 0,
    trackHeight: 2,
    theValue: [0, 8560] // theValue[0] < theValue[1]
};
if (localStorage.getItem("theValue") !== null) {
    inputsRy.theValue = JSON.parse(localStorage.theValue);
    document.querySelector('.price-range').textContent = `${inputsRy.theValue[0]}€ - ${inputsRy.theValue[1]}€`;
}
let isDragging0 = false;
let isDragging1 = false;
const range = inputsRy.maxRange - inputsRy.minRange;
const rangeK = inputsRy.sliderWidth / range;
const container = document.querySelector(".container");
const thumbRealWidth = inputsRy.thumbWidth + 2 * inputsRy.thumbBorderWidth;
// styles
const slider = document.querySelector(".slider");
slider.style.height = inputsRy.trackHeight + "px";
slider.style.width = inputsRy.sliderWidth + "px";
slider.style.paddingLeft = (inputsRy.theValue[0] - inputsRy.minRange) * rangeK + "px";
slider.style.paddingRight = inputsRy.sliderWidth - inputsRy.theValue[1] * rangeK + "px";
const track = document.querySelector(".track");
track.style.width = inputsRy.theValue[1] * rangeK - inputsRy.theValue[0] * rangeK + "px";
const thumbs = document.querySelectorAll(".thumb");
for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].style.top = -(inputsRy.thumbWidth / 2 + inputsRy.thumbBorderWidth - inputsRy.trackHeight / 2) + "px";
    thumbs[i].style.left = (inputsRy.theValue[i] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
}
//events
thumbs[0].addEventListener("mousedown", function () {
    isDragging0 = true;
}, false);
thumbs[1].addEventListener("mousedown", function () {
    isDragging1 = true;
}, false);
container.addEventListener("mouseup", function () {
    isDragging0 = false;
    isDragging1 = false;
}, false);
container.addEventListener("mouseout", function () {
    isDragging0 = false;
    isDragging1 = false;
}, false);
container.addEventListener("mousemove", function (evt) {
    const mousePos = oMousePos(this, evt);
    const theValue0 = (isDragging0) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[0];
    const theValue1 = (isDragging1) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[1];
    document.querySelector('.price-range').textContent = `${theValue0}€ - ${theValue1}€`;
    localStorage.theValue = JSON.stringify(inputsRy.theValue);
    if (isDragging0) {
        if (theValue0 < theValue1 - (thumbRealWidth / 2) &&
            theValue0 >= inputsRy.minRange) {
            inputsRy.theValue[0] = theValue0;
            thumbs[0].style.left = (theValue0 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
            slider.style.paddingLeft = (theValue0 - inputsRy.minRange) * rangeK + "px";
            track.style.width = (theValue1 - theValue0) * rangeK + "px";
        }
    }
    else if (isDragging1) {
        if (theValue1 > theValue0 + (thumbRealWidth / 2) &&
            theValue1 <= inputsRy.maxRange) {
            inputsRy.theValue[1] = theValue1;
            thumbs[1].style.left = (theValue1 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
            slider.style.paddingRight = (inputsRy.maxRange - theValue1) * rangeK + "px";
            track.style.width = (theValue1 - theValue0) * rangeK + "px";
        }
    }
}, false);
// helpers
function oMousePos(elmt, evt) {
    const ClientRect = elmt.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    };
}
const inputs = {
    sliderWidth: 200,
    minRange: 1950,
    maxRange: 1990,
    outputWidth: 30,
    thumbWidth: 10,
    thumbBorderWidth: 0,
    trackHeight: 2,
    theValue: [1950, 1990] // theValue[0] < theValue[1]
};
if (localStorage.getItem("theValue1") !== null) {
    inputs.theValue = JSON.parse(localStorage.theValue1);
    document.querySelector('.year-range').textContent = `${inputs.theValue[0]}€ - ${inputs.theValue[1]}€`;
}
let isDragging2 = false;
let isDragging3 = false;
const range1 = inputs.maxRange - inputs.minRange;
const rangeK1 = inputs.sliderWidth / range1;
const container1 = document.querySelector(".container1");
const thumbRealWidth1 = inputs.thumbWidth + 2 * inputs.thumbBorderWidth;
// styles
const slider1 = document.querySelector(".slider1");
slider1.style.height = inputs.trackHeight + "px";
slider1.style.width = inputs.sliderWidth + "px";
slider1.style.paddingLeft = (inputs.theValue[0] - inputs.minRange) * range1 + "px";
slider1.style.paddingRight = inputs.sliderWidth - inputs.theValue[1] * range1 + "px";
const track1 = document.querySelector(".track1");
track1.style.width = inputs.theValue[1] * rangeK1 - inputs.theValue[0] * rangeK1 + "px";
const thumbs1 = document.querySelectorAll(".thumb1");
for (let i = 0; i < thumbs1.length; i++) {
    thumbs1[i].style.top = -(inputs.thumbWidth / 2 + inputs.thumbBorderWidth - inputs.trackHeight / 2) + "px";
    thumbs1[i].style.left = (inputs.theValue[i] - inputs.minRange) * rangeK1 - (thumbRealWidth1 / 2) + "px";
}
//events
thumbs1[0].addEventListener("mousedown", function () {
    isDragging2 = true;
}, false);
thumbs1[1].addEventListener("mousedown", function () {
    isDragging3 = true;
}, false);
container1.addEventListener("mouseup", function () {
    isDragging2 = false;
    isDragging3 = false;
}, false);
container1.addEventListener("mouseout", function () {
    isDragging2 = false;
    isDragging3 = false;
}, false);
container1.addEventListener("mousemove", function (evt) {
    const mousePos = oMousePos(this, evt);
    const theValue0 = (isDragging2) ? Math.round(mousePos.x / rangeK1) + inputs.minRange : inputs.theValue[0];
    const theValue1 = (isDragging3) ? Math.round(mousePos.x / rangeK1) + inputs.minRange : inputs.theValue[1];
    document.querySelector('.year-range').textContent = `${theValue0} - ${theValue1}`;
    localStorage.theValue1 = JSON.stringify(inputs.theValue);
    if (isDragging2) {
        if (theValue0 < theValue1 - (thumbRealWidth1 / 2) &&
            theValue0 >= inputs.minRange) {
            inputs.theValue[0] = theValue0;
            thumbs1[0].style.left = (theValue0 - inputs.minRange) * rangeK1 - (thumbRealWidth1 / 2) + "px";
            slider1.style.paddingLeft = (theValue0 - inputs.minRange) * rangeK1 + "px";
            track1.style.width = (theValue1 - theValue0) * rangeK1 + "px";
        }
    }
    else if (isDragging3) {
        if (theValue1 > theValue0 + (thumbRealWidth1 / 2) &&
            theValue1 <= inputs.maxRange) {
            inputs.theValue[1] = theValue1;
            thumbs1[1].style.left = (theValue1 - inputs.minRange) * rangeK1 - (thumbRealWidth1 / 2) + "px";
            slider1.style.paddingRight = (inputs.maxRange - theValue1) * rangeK1 + "px";
            track1.style.width = (theValue1 - theValue0) * rangeK1 + "px";
        }
    }
}, false);
function sortBy() {
    const arr = [];
    const arr1 = [];
    const colorConditions = [];
    const producerConditions = [];
    const typeConditions = [];
    const inputsChecked = document.querySelectorAll("input");
    const saveChecked = [];
    inputsChecked.forEach(e => {
        if (e.type === "checkbox" && e.checked) {
            saveChecked.push(e.id);
            console.log(inputsChecked);
            localStorage.saveChecked = JSON.stringify(saveChecked);
            switch (e.value) {
                case 'color':
                    colorConditions.push(e.id);
                    break;
                case 'producer':
                    producerConditions.push(e.id);
                    break;
                case 'type':
                    typeConditions.push(e.id);
                    break;
                default: '';
            }
        }
    });
    products.forEach((e) => {
        if ((colorConditions.includes(e[4]) || colorConditions.length < 1) &&
            (producerConditions.includes(e[5]) || producerConditions.length < 1) &&
            (typeConditions.includes(e[8]) || typeConditions.length < 1)) {
            arr.push(e);
        }
    });
    const priceRange = document.querySelector('.price-range').textContent.split('-');
    const yearRange = document.querySelector('.year-range').textContent.split('-');
    arr.forEach(e => {
        if (parseInt(e[3].slice(0, -1)) >= parseInt((priceRange[0].slice(0, -1))) &&
            parseInt(e[3].slice(0, -1)) <= parseInt(priceRange[1].slice(0, -1)) &&
            e[2] >= parseInt(yearRange[0]) &&
            e[2] <= parseInt(yearRange[1])) {
            arr1.push(e);
        }
    });
    if (document.querySelector('.slider-click').classList.contains('checked')) {
        return arr1.filter(e => e[9] === true);
    }
    return arr1;
}


/***/ }),

/***/ "./src/scripts/window.ts":
/*!*******************************!*\
  !*** ./src/scripts/window.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showWindow": () => (/* binding */ showWindow)
/* harmony export */ });
function showWindow(target) {
    var _a;
    const products = JSON.parse(localStorage.products);
    if (document.querySelector('.product_window_close')) {
        document.querySelector('.product_window').remove();
        const html = document.querySelector('html');
        html.style.overflowY = 'scroll';
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
    html.style.overflowY = 'hidden';
    main.append(section);
    section.append(close);
    section.append(wrapper);
    wrapper.append(img);
    wrapper.append(text);
    text.append(h2);
    text.append(h4);
    text.append(description);
    text.append(button);
    text.append(designer);
    text.append(year);
    text.append(producer);
    text.append(color);
    text.append(amount);
    const name = (_a = target.nextSibling.firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
    let arr = ['', 0, 0, '', '', '', '', '', '', true];
    products.forEach((e) => {
        if (e[0] === name) {
            arr = e;
        }
    });
    img.style.background = `url(${arr[6]})`;
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    h2.textContent = `${arr[0]}`;
    h4.textContent = `${arr[3]}`;
    if (arr[10] === true) {
        button.textContent = `IN CART`;
        button.classList.toggle('product_window_button');
        button.classList.toggle('product_window_button_focus');
    }
    else {
        button.textContent = `ADD TO CART`;
    }
    description.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.`;
    designer.textContent = `DESIGNER: ${arr[7]}`;
    year.textContent = `YEAR: ${arr[2]}`;
    producer.textContent = `PRODUCER: ${arr[5]}`;
    color.textContent = `COLOR: ${arr[4]}`;
    amount.textContent = `Items in stock: 20`;
    close.style.background = `url('./assets/close.svg')`;
    close.style.backgroundSize = 'cover';
    close.style.backgroundPosition = 'center';
}
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('product_window_close')) {
        showWindow(event.target);
    }
});


/***/ }),

/***/ "./src/assets/icons/Icon color-1.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/Icon color-1.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/Icon color-1..svg";

/***/ }),

/***/ "./src/assets/icons/Icon color.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/Icon color.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/Icon color..svg";

/***/ }),

/***/ "./src/assets/icons/add.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/add.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/add..svg";

/***/ }),

/***/ "./src/assets/icons/arrow.svg":
/*!************************************!*\
  !*** ./src/assets/icons/arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/arrow..svg";

/***/ }),

/***/ "./src/assets/icons/close.svg":
/*!************************************!*\
  !*** ./src/assets/icons/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/close..svg";

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/facebook..svg";

/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/github..svg";

/***/ }),

/***/ "./src/assets/icons/inst.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/inst.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/inst..svg";

/***/ }),

/***/ "./src/assets/icons/rs_school_js.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/rs_school_js.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/rs_school_js..svg";

/***/ }),

/***/ "./src/assets/icons/shopping-cart 1.svg":
/*!**********************************************!*\
  !*** ./src/assets/icons/shopping-cart 1.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/shopping-cart 1..svg";

/***/ }),

/***/ "./src/assets/icons/twitter-1.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/twitter-1.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/twitter-1..svg";

/***/ }),

/***/ "./src/assets/icons/twitter.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/twitter.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/twitter..svg";

/***/ }),

/***/ "./src/assets/img/1813.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/1813.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/1813..jpg";

/***/ }),

/***/ "./src/assets/img/267.jpg":
/*!********************************!*\
  !*** ./src/assets/img/267.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/267..jpg";

/***/ }),

/***/ "./src/assets/img/268.jpg":
/*!********************************!*\
  !*** ./src/assets/img/268.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/268..jpg";

/***/ }),

/***/ "./src/assets/img/4875.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/4875.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/4875..jpg";

/***/ }),

/***/ "./src/assets/img/b33.jpg":
/*!********************************!*\
  !*** ./src/assets/img/b33.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/b33..jpg";

/***/ }),

/***/ "./src/assets/img/b64.jpg":
/*!********************************!*\
  !*** ./src/assets/img/b64.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/b64..jpg";

/***/ }),

/***/ "./src/assets/img/candleholder.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/candleholder.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/candleholder..jpg";

/***/ }),

/***/ "./src/assets/img/dss.jpg":
/*!********************************!*\
  !*** ./src/assets/img/dss.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/dss..jpg";

/***/ }),

/***/ "./src/assets/img/eero.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/eero.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/eero..jpg";

/***/ }),

/***/ "./src/assets/img/hammer-red.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/hammer-red.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/hammer-red..jpg";

/***/ }),

/***/ "./src/assets/img/hammer-yellow.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/hammer-yellow.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/hammer-yellow..jpg";

/***/ }),

/***/ "./src/assets/img/koror.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/koror.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/koror..jpg";

/***/ }),

/***/ "./src/assets/img/massimo.jpg":
/*!************************************!*\
  !*** ./src/assets/img/massimo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/massimo..jpg";

/***/ }),

/***/ "./src/assets/img/mg5-red.jpg":
/*!************************************!*\
  !*** ./src/assets/img/mg5-red.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/mg5-red..jpg";

/***/ }),

/***/ "./src/assets/img/mg5-white.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/mg5-white.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/mg5-white..jpg";

/***/ }),

/***/ "./src/assets/img/modus.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/modus.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/modus..jpg";

/***/ }),

/***/ "./src/assets/img/p40.jpg":
/*!********************************!*\
  !*** ./src/assets/img/p40.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/p40..jpg";

/***/ }),

/***/ "./src/assets/img/pelikan.jpg":
/*!************************************!*\
  !*** ./src/assets/img/pelikan.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/pelikan..jpg";

/***/ }),

/***/ "./src/assets/img/philippe.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/philippe.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/philippe..jpg";

/***/ }),

/***/ "./src/assets/img/plia.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/plia.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/plia..jpg";

/***/ }),

/***/ "./src/assets/img/roger.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/roger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/roger..jpg";

/***/ }),

/***/ "./src/assets/img/tango.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/tango.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/tango..jpg";

/***/ }),

/***/ "./src/assets/img/togo.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/togo.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/togo..jpg";

/***/ }),

/***/ "./src/assets/img/wassily.jpg":
/*!************************************!*\
  !*** ./src/assets/img/wassily.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/wassily..jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/scripts/loader.ts");
/* harmony import */ var _assets_img_massimo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/massimo.jpg */ "./src/assets/img/massimo.jpg");
/* harmony import */ var _assets_img_plia_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/plia.jpg */ "./src/assets/img/plia.jpg");
/* harmony import */ var _assets_img_267_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/267.jpg */ "./src/assets/img/267.jpg");
/* harmony import */ var _assets_img_eero_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/eero.jpg */ "./src/assets/img/eero.jpg");
/* harmony import */ var _assets_img_pelikan_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/pelikan.jpg */ "./src/assets/img/pelikan.jpg");
/* harmony import */ var _assets_img_268_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/268.jpg */ "./src/assets/img/268.jpg");
/* harmony import */ var _assets_img_p40_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/p40.jpg */ "./src/assets/img/p40.jpg");
/* harmony import */ var _assets_img_hammer_red_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/hammer-red.jpg */ "./src/assets/img/hammer-red.jpg");
/* harmony import */ var _assets_img_roger_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/roger.jpg */ "./src/assets/img/roger.jpg");
/* harmony import */ var _assets_img_wassily_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/wassily.jpg */ "./src/assets/img/wassily.jpg");
/* harmony import */ var _assets_img_4875_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/img/4875.jpg */ "./src/assets/img/4875.jpg");
/* harmony import */ var _assets_img_b64_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/img/b64.jpg */ "./src/assets/img/b64.jpg");
/* harmony import */ var _assets_img_tango_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/img/tango.jpg */ "./src/assets/img/tango.jpg");
/* harmony import */ var _assets_img_hammer_yellow_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/img/hammer-yellow.jpg */ "./src/assets/img/hammer-yellow.jpg");
/* harmony import */ var _assets_img_1813_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/img/1813.jpg */ "./src/assets/img/1813.jpg");
/* harmony import */ var _assets_img_mg5_white_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/img/mg5-white.jpg */ "./src/assets/img/mg5-white.jpg");
/* harmony import */ var _assets_img_b33_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/img/b33.jpg */ "./src/assets/img/b33.jpg");
/* harmony import */ var _assets_img_togo_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/img/togo.jpg */ "./src/assets/img/togo.jpg");
/* harmony import */ var _assets_img_candleholder_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/img/candleholder.jpg */ "./src/assets/img/candleholder.jpg");
/* harmony import */ var _assets_img_koror_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/img/koror.jpg */ "./src/assets/img/koror.jpg");
/* harmony import */ var _assets_img_modus_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/img/modus.jpg */ "./src/assets/img/modus.jpg");
/* harmony import */ var _assets_img_mg5_red_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/img/mg5-red.jpg */ "./src/assets/img/mg5-red.jpg");
/* harmony import */ var _assets_img_philippe_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/img/philippe.jpg */ "./src/assets/img/philippe.jpg");
/* harmony import */ var _assets_img_dss_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/img/dss.jpg */ "./src/assets/img/dss.jpg");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/close.svg */ "./src/assets/icons/close.svg");
/* harmony import */ var _assets_icons_add_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/add.svg */ "./src/assets/icons/add.svg");
/* harmony import */ var _assets_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/arrow.svg */ "./src/assets/icons/arrow.svg");
/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/icons/facebook.svg */ "./src/assets/icons/facebook.svg");
/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/icons/github.svg */ "./src/assets/icons/github.svg");
/* harmony import */ var _assets_icons_inst_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/icons/inst.svg */ "./src/assets/icons/inst.svg");
/* harmony import */ var _assets_icons_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/icons/rs_school_js.svg */ "./src/assets/icons/rs_school_js.svg");
/* harmony import */ var _assets_icons_shopping_cart_1_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/icons/shopping-cart 1.svg */ "./src/assets/icons/shopping-cart 1.svg");
/* harmony import */ var _assets_icons_twitter_1_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/icons/twitter-1.svg */ "./src/assets/icons/twitter-1.svg");
/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/icons/twitter.svg */ "./src/assets/icons/twitter.svg");
/* harmony import */ var _assets_icons_Icon_color_1_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/icons/Icon color-1.svg */ "./src/assets/icons/Icon color-1.svg");
/* harmony import */ var _assets_icons_Icon_color_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/icons/Icon color.svg */ "./src/assets/icons/Icon color.svg");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./cart */ "./src/scripts/cart.ts");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./window */ "./src/scripts/window.ts");
var _a;









































(0,_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard)();
document.addEventListener("keydown", () => {
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
});
(_a = document.querySelector(".filter_shop-by")) === null || _a === void 0 ? void 0 : _a.addEventListener('input', () => {
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
});
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('product-card_add') ||
        event.target.classList.contains('pruduct_add_text') ||
        event.target.classList.contains('product_window_button') ||
        event.target.classList.contains('product_window_button_focus')) {
        (0,_cart__WEBPACK_IMPORTED_MODULE_38__.addTocart)(event.target);
    }
});
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('product-card_img')) {
        (0,_window__WEBPACK_IMPORTED_MODULE_39__.showWindow)(event.target);
    }
});
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox') || event.target.classList.contains('checkbox_label')) {
        window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
    }
});
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('slider-click')) {
        event.target.classList.toggle('checked');
        event.target.classList.contains('checked') ? localStorage.setItem('popularChecked', JSON.stringify(true)) :
            localStorage.setItem('popularChecked', JSON.stringify(false));
        (0,_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard)();
    }
});
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter_search_button')) {
        document.querySelector(".filter_search").value = "";
        (0,_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard)();
    }
});
document.querySelectorAll(".thumb")[0].addEventListener('mouseup', () => {
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
});
document.querySelectorAll(".thumb")[1].addEventListener('mouseup', () => {
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
});
document.querySelectorAll(".thumb1")[0].addEventListener('mouseup', () => {
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
});
document.querySelectorAll(".thumb1")[1].addEventListener('mouseup', () => {
    window.setTimeout(_loader__WEBPACK_IMPORTED_MODULE_1__.CreateCard, 10);
});
document.querySelector(".filter_reset").addEventListener('click', () => {
    localStorage.removeItem("theValue");
    localStorage.removeItem("saveChecked");
    localStorage.removeItem("theValue1");
    localStorage.removeItem("popularChecked");
    localStorage.removeItem("shopBy");
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map