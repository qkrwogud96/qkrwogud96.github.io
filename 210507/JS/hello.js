function f() {
    let num = prompt( "양의 정수를 입력하세요." );
    let share = Math.floor( num/10 );
    let remain = num%10;
    let sum = 0; 
    while(true){
        if(share >= 10){
            sum += remain;
            remain = share%10;
            share = Math.floor( share/10 );
        }
        else{
            sum += share;
            sum += remain;
            break;
        }
    }
    document.write(`입력한 값의 각 자리수 합 = ${sum}`);    
}
f();


