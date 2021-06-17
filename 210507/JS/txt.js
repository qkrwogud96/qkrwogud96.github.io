
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
