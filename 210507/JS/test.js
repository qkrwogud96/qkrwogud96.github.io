let num = 5;
for ( let i = num; i >= 1; i--){
    let star = "";

    for( let j = num - i; j > 0 ; j--){
        star += " ";
    }
    for( let j =(i*2)-1; j >= 1  ; j--){
        star += "*";
    }
    console.log(star);
} // 피라미드 출력

// 1   9 
// 2   7
// 3   5
// 4   3
// 5   1