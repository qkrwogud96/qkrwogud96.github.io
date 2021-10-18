window.onload = function () {
  const loadLocal = localStorage.getItem("product");
  const localStr = JSON.parse(loadLocal);

  const productSrc = document.querySelector(".info_img > img");
  const productName = document.querySelector(".product_name");
  const productPrice = document.querySelector(".product_price");

  productSrc.setAttribute("src", localStr.src.replace("../", ""));
  productName.innerText = localStr.name;
  productPrice.innerText = localStr.price;
};
