// let value = Symbol( "hong" );
// let data = Symbol( "hong" );
// console.log( value === data );

// let a = "hong";
// let b = "hong";
// console.log(a===b);


// 나이 계산하기
// 1. 출생년도 입력받기 (prompt)
// 2. 나이 계산하기 
// 3. 나이 출력하기 (write)
function calc(){
    const currentYear = 2021;
    let birthYear = prompt( '출생년도를 입력하세요');
    let age = currentYear - birthYear + 1;
    document.write(`당신의 나이는 ${age} 입니다.`);
}
