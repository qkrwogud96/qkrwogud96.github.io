const productsElem = document.querySelectorAll(".product_wrap > .product");
// console.log(productsElem);

function newPage(e) {
  saveItem(e);
}

const saveItem = (e) => {
  const nowProductSrc = e.target.getAttribute('src')
  const nowProductName = e.target.parentElement.children[1].children[0].innerText
  const nowProductPrice = e.target.parentElement.children[1].children[1].innerText

  const PRODUCT = {
    src: nowProductSrc,
    name: nowProductName,
    price: nowProductPrice,
  };
 
  saveLocalStorage(PRODUCT);
};

const saveLocalStorage = (item) => {
  const str = JSON.stringify(item);
  window.localStorage.setItem("product", str);
};

productsElem.forEach((item) => {
  item.addEventListener("click", newPage);
});
