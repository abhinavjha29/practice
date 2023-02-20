let form = document.getElementById("addForm") ;
let itemlist = document.getElementById('items') ;
//form.addEventListener('submit',additem ) ;
itemlist.addEventListener('click' ,remove) ;
// function additem(e) {
//     e.preventDefault() ;
//     let newitem = document.getElementById('item').value ;

//     let li = document.createElement('li') ;

//     li.className = 'list-group-item' ;
//     li.appendChild(document.createTextNode(newitem)) ;
//     let deletebtn = document.createElement('button') ;
//     deletebtn.className = 'btn btn-danger btn-sm float-right delete' ;
//     deletebtn.appendChild(document.createTextNode('X')) ;
//  itemlist.appendChild(li) ;
//  li.appendChild(deletebtn) ;
//}
function remove(e) {
    if(e.target.classList.contains('delete')) {
        let li = e.target.parentElement ;
        itemlist.removeChild(li) ;
    }
}
// Get the list of items
const itemsList = document.getElementById('items');

// Loop through each list item and add an edit button
for (let i = 0; i < itemsList.children.length; i++) {
  const editButton = document.createElement('button');
  editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'float-right', 'edit');
  editButton.innerText = 'Edit';
  itemsList.children[i].appendChild(editButton);
}

// to create extra input //
// let container = document.getElementsByClassName('card card-body') ;
// let newinput = document.createElement('input') ;
// newinput.setAttribute('type' , 'text') ;
// newinput.setAttribute("name", "newInput");
// //newinput.setAttribute("value", "");
// newinput.appendChild(container) ;
// newinput.className = "form-control mr-2" ;


// Select the submit button element
const submitBtn = document.querySelector('#addForm input[type="submit"]');

// Create a new input element
const newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('class', 'form-control mr-2');

// Add the new input element as a sibling of the submit button
submitBtn.parentNode.appendChild(newInput);
