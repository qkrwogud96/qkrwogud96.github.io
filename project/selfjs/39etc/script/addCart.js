const addCartBtn = document.querySelector('button');


const btnClickEvent = () => { 
    alert('준비중입니다.');  
}
addCartBtn.addEventListener('click', btnClickEvent);

// 버튼 클릭 시 

// 1. local Storage에 저장  (이미지 , 이름 , 가격, 사이즈 , 개수)
// 2. bag에서 load할때 local Storage로 불러오기
// 3. ul li처럼 추가