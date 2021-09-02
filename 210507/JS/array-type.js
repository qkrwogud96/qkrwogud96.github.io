// let arr = [];
// arr = ['A', 'B', 'C', 'D', 'E'];
// for(let i = 65; i < 70; i++){
//     arr.push(String.fromCharCode(i));
// }
// const pos = arr.indexOf('C');
// arr.splice(pos ,2);
// arr = ['A', 'B', 'E'];

let arr = [];
// [{id:65, name:'A'},{id:65, name:'B'},{id:65, name:'C'}...E];

for (let i = 65; i < 70; i++) {
  const box = { id: i, name: String.fromCharCode(i) };
  arr.push(box);
}   
arr = arr.filter((obj) => {
  return obj.id != "67";
});
localStorage.setItem('value', arr);
