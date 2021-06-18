
//입&출력 연습////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. 출생년도 입력받기 (prompt)
// 2. 나이 계산하기 
// 3. 나이 출력하기 (write)
function calc(){
    const currentYear = 2021;
    let birthYear = prompt( '출생년도를 입력하세요');
    let age = currentYear - birthYear + 1;
    document.write(`당신의 나이는 ${age} 입니다.`);
}

//배열 연습//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. 행성 배열하기 ( [] )
// 2. 유저에게 index값 받기 ( prompt )
// 3. 행성 출력하기 ( document.write() )
function f(){
    let planets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
    let uText = prompt( "출력할 행성을 입력하세요." );
    console.log( typeof(uText) );           // prompt는 string으로 입력받음.
    let value = parseInt( input );          // int형으로 변환 ( js에선 알아서 처리해줘서 굳이 필요 없음 )
    document.write(`${uText}번째 행성의 이름은 ${planets[uText-1]}입니다.`);
    }

//반복문 연습/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let seasons = ['봄','여름','가을','겨울'];

for(let i = 0; i < seasons.length; i++)
console.log(seasons[i]);

for (let i of seasons)
console.log( i ); // 배열의 값 출력

for (let i in seasons)
console.log( i ); // 배열의 index값 출력



for( let num = 2; num <= 9; num++)
{
    document.write('<div>');
    document.write('<h2>'+ num + '단</h2>');
    for(let j = 1; j <= 9; j++){
        document.write( num + " X " + j + " = " + (num * j) + "<br>" );
        }
        document.write('</div>');
} // html에서 보여지게 하는 방법

let num = 5;
for ( let i = 1; i <= num; i++){
    let star = "";

    for( let j = num - i; j > 0 ; j--){
        star += " ";
    }
    for( let j = 1; j <= (i *2 ) -1 ; j++){
        star += "*";
    }
    console.log(star);
} // 피라미드 출력

for( let i=start; i<=end; i++){
    // console.log( i );
    sum += Math.floor( i/10);
    sum += i%10;
}
console.log( sum ); // 나눗셈 저장

///함수//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let value = name => `${name}님 안녕하세요`;
console.log( value('hong') );  //1줄 함수 생략

let card = {suit:'하트', rank:'A'}; //함수이름 생략
console.log( card.suit ); // 값 출력
console.log( card["rank"] ); // value 출력
card.value = 14; //value 추가
console.log ( card );
delete card.value; //value 삭제
console.log ( card );

console.log( "suit" in card );
let a = card;  //함수 저장 위치 확인
console.log( a ); 
console.log ( a.suit ); 



function f() {
    let num = prompt( "양의 정수를 입력하세요." );
    let share = Math.floor( num/10 );
    let remain = num%10;
    let sum, i = 0;
    let line = [];
     
    while(true){
        if(share >= 10){
            line[i] = remain;
            document.write( `${i+1}번째 자릿수 값= ${line[i]}<br>` );   
            i++;
            sum += remain;
            remain = share%10;
            share = Math.floor( share/10 );
        }
        else{
            line[i] = remain;
            line[i+1] = share;
            document.write( `${i+1}번째 자릿수 값= ${line[i]}<br>` );
            document.write( `${i+2}번째 자릿수 값= ${line[i+1]}<br>` );
            sum += share;
            sum += remain;
            break;
        }
    }
    document.write(`입력한 값의 각 자리수 합 = ${sum}`);  
}
f(); //각 자리수의 합



let flag = 0;
let obj = document.querySelector("img");
// obj.onclick = changeImange;
obj.addEventListener("click", changeImange);
function changeImange() {
  let imgName = ['header','ice', 'section1'];
  flag++; 
  if( flag > 2 ) flag = 0;
  console.log ( flag );
  obj.setAttribute("src", "/project/cafe/Image/"+imgName[flag] +".jpg"); //이미지 변경 1

  if (flag == 1) {
    flag = 2;
    obj.setAttribute("src", "/project/cafe/Image/ice.jpg");
  } 
  else if(flag == 2){ 
    flag = 0;
    obj.setAttribute("src", "/project/cafe/Image/section1.jpg") 
  }
  else {
    flag = 1
    obj.setAttribute("src", "/project/cafe/Image/header.jpg");
  } //이미지 변경2
} 


//용어들///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

accessKey: ""
align: ""
// attributeStyleMap: StylePropertyMap {size: 0}
// attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:5500/210507/JS/test.html"
childElementCount: 1
childNodes: NodeList [p]
children: HTMLCollection [p]
// classList: DOMTokenList [value: ""]
className: ""
clientHeight: 21
clientLeft: 0
clientTop: 0
clientWidth: 1205
contentEditable: "inherit"
// dataset: DOMStringMap {}  
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: p
firstElementChild: p
hidden: false
id: ""
innerHTML: "<p>첫번째 DIV</p>"   
innerText: "첫번째 DIV" //html 텍스트 바꾸기
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: p
lastElementChild: p
localName: "div"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: div
nextSibling: text
nodeName: "DIV"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 21        // 스크롤 처리 할때 주로 쓰는 것들
offsetLeft: 8        // 스크롤 처리 할때 주로 쓰는 것들
offsetParent: body        // 스크롤 처리 할때 주로 쓰는 것들
offsetTop: 16        // 스크롤 처리 할때 주로 쓰는 것들
offsetWidth: 1205        // 스크롤 처리 할때 주로 쓰는 것들
outerHTML: "<div><p>첫번째 DIV</p></div>"
outerText: "첫번째 DIV"
ownerDocument: document
parentElement: body
parentNode: body
// part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 21
scrollLeft: 0
scrollTop: 0
scrollWidth: 1205
shadowRoot: null
slot: ""
spellcheck: true
// style: CSSStyleDeclaration {additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …} 
tabIndex: -1
tagName: "DIV"
textContent: "첫번째 DIV"
title: ""
translate: true


getAttribute  //속성값 찾기
setAttribute  //속성값 세팅 ("속성","변경")
hasAttribute  //속성값 true || false
removeAttribute  //속성값 일부 제거



document.getElementById("box"); // html 로 지정
document.querySelector(".box"); // CSS 단일 지정( 가장 처음 )
document.querySelectorAll("div") //CSS 전체 지정



document.createElement("태그")
appendChild // 지정한 요소의 마지막 자식으로 삽입 after
insertBefore //지정한 요소의 처음 자식으로 삽입 before

let objTag = document.createElement("h1");        
objTag.innerText = "제목"; // 태그 안에 텍스트 삽입
a.appendChild("body"); 

let bodyObj = document.querySelector("body");
let a = document.querySelector(".naver"); 
bodyObj.insertBefore( objTag, a); // 부모 밑에 있는 자식 위에 삽입

for( let obj of bodyObj.children){
    console.log(obj);
  } //자식들의 구성 요소 확인

  let list = ['1st','2st','3st','4st'];
  list.forEach( obj =>console.log(obj) );

  list.forEach( function(obj) { console.log(obj) }); //배열 안에 구성 요소 확인



