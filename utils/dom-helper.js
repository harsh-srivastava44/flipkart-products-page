function renderNotFound() {
  let productlist = document.getElementById("products");
  productlist.innerHTML = `<h4 class="no__product"> Not Products Found ...</h4>`;
}
function renderList(products = []) {
  let productlist = document.getElementById("products");
  productlist.innerHTML = "";
  products.forEach((item) => {
    let product = document.createElement("div");
    product.classList.add("card");
    product.innerHTML = ` <div class="product__image">
              <img src="${item.imageUrl}"
                  alt="">
              
          </div>
          <div class="product__title">${item.name}</div>
           ${
             item.rating !== undefined
               ? `<div class="product__rating">${item.rating}&#9733;</div>`
               : ""
           } 
         
          <div class="product__pricing">
              <div class="sale__price">
                  &#x20B9; ${item.finalPrice}
              </div>
              ${
                item.mrp !== undefined
                  ? ` <div class="mrp__price">
                  <s>&#x20B9; ${item.mrp}</s>
              </div>`
                  : ""
              }
              <div class="percentage__off">
                  ${item.discount !== undefined ? `${item.discount}` : ``}
              </div>
          </div>`;
    productlist.appendChild(product);
  });
}

function renderPrice(prices = []) {
  minPriceRenderer(prices);
  maxPriceRenderer(prices);
}
function renderColors(colors = []) {
  let colorContainer = document.getElementById("colors_filter");
  colors.forEach((color) => {
    let elem = document.createElement("div");
    elem.classList.add("color__type");
    elem.innerHTML = ` 
    <input type="checkbox" class="color__checkbox" />
    <button style="background-color: ${color.value}" class="color__selector"></button>
    <p>${color.name}</p>`;
    colorContainer.appendChild(elem);
  });
}
function minPriceRenderer(prices = []) {
  let minPriceElem = document.getElementById("minprice_filter");
  prices.forEach((price) => {
    let priceElem = document.createElement("option");
    priceElem.value = price;
    priceElem.innerText = price;
    minPriceElem.appendChild(priceElem);
  });
}
function maxPriceRenderer(prices = []) {
  let maxPriceElem = document.getElementById("maxprice_filter");
  prices.forEach((price) => {
    let priceElem = document.createElement("option");
    priceElem.value = price;
    priceElem.innerText = price;
    maxPriceElem.appendChild(priceElem);
  });
}

export { renderList, renderPrice, renderNotFound,renderColors };
