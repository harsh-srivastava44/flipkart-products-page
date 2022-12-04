let productsData = [];
let filter = {};
function getAllProducts() {
    fetch("https://api.jsonbin.io/v3/b/638974d4a3c728450edd19b7").then((res)=>res.json()).then((data)=>{
        productsData = data?.record?.products || [];
        renderList(productsData);
    });
}
function getFilters() {
    fetch("https://api.jsonbin.io/v3/b/6389742ea3c728450edd194a").then((data)=>data.json()).then((res)=>console.log({
            res
        }));
}
function renderList(products = []) {
    let productlist = document.getElementById("products");
    productlist.innerHTML = "";
    products.forEach((item)=>{
        let product = document.createElement("div");
        product.classList.add("card");
        product.innerHTML = ` <div class="product__image">
            <img src="${item.imageUrl}"
                alt="">
            
        </div>
        <div class="product__title">${item.name}</div>
         ${item.rating !== undefined ? `<div class="product__rating">${item.rating}&#9733;</div>` : ""} 
       
        <div class="product__pricing">
            <div class="sale__price">
                &#x20B9; ${item.finalPrice}
            </div>
            ${item.mrp !== undefined ? ` <div class="mrp__price">
                <s>&#x20B9; ${item.mrp}</s>
            </div>` : ""}
            <div class="percentage__off">
                ${item.discount !== undefined ? `${item.discount}` : ``}
            </div>
        </div>`;
        productlist.appendChild(product);
    });
}
function sortLowToHigh() {
    let sortedData = [
        ...productsData
    ];
    sortedData.sort((a, b)=>parseInt(a.finalPrice) !== undefined && parseInt(b.finalPrice) !== undefined ? parseInt(a.finalPrice) - parseInt(b.finalPrice) : parseInt(a.mrp) - parseInt(b.mrp));
    renderList(sortedData);
}
function sortHighToLow() {
    let sortedData = [
        ...productsData
    ];
    sortedData.sort((a, b)=>parseInt(a.finalPrice) !== undefined && parseInt(b.finalPrice) !== undefined ? parseInt(b.finalPrice) - parseInt(a.finalPrice) : parseInt(b.mrp) - parseInt(a.mrp));
    renderList(sortedData);
}
function getProductsBasedOnColor(selectedColor = "") {
    let filterdData = productsData.filter((product)=>product.color == selectedColor);
}
getAllProducts();
getFilters() /**
 * 
 */ ;

//# sourceMappingURL=index.c36f364e.js.map
