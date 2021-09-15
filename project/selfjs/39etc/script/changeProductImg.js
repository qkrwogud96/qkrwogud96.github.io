const product = document.querySelectorAll(".product");

let curIdx = 1;
let nextIdx = 2;
let IMG_SRC = [];

// 각 div마다 src 읽기

product.forEach((element) => {
  const image = element.children[0].getAttribute("src");
  IMG_SRC.push(image);
});
// +1 하면서 src 바꾸기.

const srcChange = (cur, next) => {
  IMG_SRC.forEach((item, num) => {
    IMG_SRC[num] = item.replace(cur, next);
  });
};
// 이미지 교체하기.

const imgChange = () => {
  IMG_SRC.forEach((item, idx) => {
    const img = product[idx].children[0];
    img.setAttribute("src", item);
  });
};

setInterval(function(){
    srcChange(curIdx, nextIdx);
    imgChange();
    if(nextIdx < 3){
        curIdx = nextIdx;
        nextIdx++;
    }
    else{
        curIdx = nextIdx;
        nextIdx = 1;
    }
},3000);

