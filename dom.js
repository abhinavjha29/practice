
console.dir(document) ;
console.log(document.domain) ;
// console.dir (document);
// console.log(document.domain);
// console.log(document. URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all [10]);
// // document.all [10].textContent
// console.log(document.forms [0]);
let header = document.getElementById("main-header") ;
//console.log(header) ;
let head = document.getElementById("header-title") ;
//console.log(head) ;
header.style.borderBottom = "solid 10px #000" ;
let change = document.getElementById("tit") ;
change.style.fontWeight= "bold" ;
change.style.color ="#008000"
let item = document.getElementsByClassName("list-group-item") ;
item[3].style.backgroundColor = 'green' ;
for(let i=0 ;i<item.length;i++) {
    item[i].style.fontWeight = 'bold' ;
}