function getProducts() {
  return fetch("https://api.jsonbin.io/v3/b/638974d4a3c728450edd19b7").then(
    (res) => res.json()
  );
}
function getFilters() {
  return fetch("https://api.jsonbin.io/v3/b/6389742ea3c728450edd194a").then((data) =>
    data.json()
  );
}

export { getProducts, getFilters };
