import { getProducts, getFilters } from "./modules/apiModule";
import {
  sortHighToLow,
  sortLowToHigh,
  getProductsInPriceRange,
} from "./utils/data-convertor";
import { renderList, renderPrice,renderNotFound, renderColors } from "./utils/dom-helper";
let productsData = [];
let filters = null;

async function getAllProducts() {
  let data = await getProducts();
  productsData = data?.record?.products || [];
  renderList(productsData);
}
async function getGenericFilters() {
  let data = await getFilters();
  filters = data?.record?.filters || {};
  renderPrice(filters.prices);
  renderColors(filters.colors)
}
function getHighToLowOrdered() {
  renderList(sortHighToLow(productsData));
}
function getLowToHighOrdered() {
  renderList(sortLowToHigh(productsData));
}

function getProductsBasedOnPrice(min, max) {
    let data = getProductsInPriceRange(productsData, min, max) || []
    if(data.length > 0) renderList(data);
    else renderNotFound();
}
function setUpListeners() {
  let sortLowToHighButton = document.getElementById("low-to-high");
  let sortHighToLowButton = document.getElementById("high-to-low");
  let minPriceSelect = document.getElementById("minprice_filter");
  let maxPriceSelect = document.getElementById("maxprice_filter");

  sortLowToHighButton.addEventListener("click", getLowToHighOrdered);
  sortHighToLowButton.addEventListener("click", getHighToLowOrdered);
  minPriceSelect.addEventListener("change", (e) =>
    getProductsBasedOnPrice(
      parseInt(e.target.value),
      parseInt(maxPriceSelect.innerText)
    )
  );
  maxPriceSelect.addEventListener("change", (e) =>
    getProductsBasedOnPrice(
      parseInt(minPriceSelect.innerText),
      parseInt(e.target.value)
    )
  );
}

getAllProducts();
getGenericFilters();
setUpListeners();
