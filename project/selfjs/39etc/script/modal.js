const productsElem = document.querySelectorAll(".product_wrap > .product");

function newPage(item) {
  window.location.href =
    "http://127.0.0.1:5500/project/selfjs/39etc/html/item_info.html";

  saveItem(item);
}

const saveItem = (item) => {
  const nowProductSrc = item.children[0].getAttribute("src");
  const nowProductName = item.children[1].children[0].innerText;
  const nowProductPrice = item.children[1].children[1].innerText;

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
  item.addEventListener("click", newPage(item));
});
