function sortLowToHigh(productsData) {
  return [...productsData].sort((a, b) =>
    parseInt(a.finalPrice) !== undefined && parseInt(b.finalPrice) !== undefined
      ? parseInt(a.finalPrice) - parseInt(b.finalPrice)
      : parseInt(a.mrp) - parseInt(b.mrp)
  );
}
function sortHighToLow(productsData) {
  return [...productsData].sort((a, b) =>
    parseInt(a.finalPrice) !== undefined && parseInt(b.finalPrice) !== undefined
      ? parseInt(b.finalPrice) - parseInt(a.finalPrice)
      : parseInt(b.mrp) - parseInt(a.mrp)
  );
}
function getProductsInPriceRange(products, min, max) {
  return products.filter(function (product) {
    if (
      product.finalPrice &&
      min < product.finalPrice &&
      max > product.finalPrice
    ) {
      return true;
    } else if (min < product.mrp && max > product.mrp) {
      return true;
    }
  });
}

export { sortLowToHigh, sortHighToLow,getProductsInPriceRange };
