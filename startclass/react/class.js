// let name1 = {
//     q : 'name-q',
//     w : 'name-w'
// }
// let name2 = {
//     e : 'name-e',
//     r : 'name-r'
// }

class Name{
    constructor(firstNmae, lastName){
        this.q = firstNmae;
        this.w = lastName;
    }
}

Name.prototype.name = '3';


let name1 = new Name('Park', 'jaehyung');
let name2 = new Name('Choi', 'sojung');


console.log( name1.q );
console.log( name2.w , name2.name);


var array = [1,3,5];
var arrTemp = new Array(5,3,1);

console.log(array);
console.log(arrTemp);
console.log(arrTemp.sort());