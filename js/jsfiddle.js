const myLibrary = [];

//Event Listeners
document.getElementById("showBooks").addEventListener('click', showBooks)
document.getElementById("addBooks").addEventListener('click', addBookToLibrary)
const book0Att = document.getElementById("book0Name").id
document.getElementById("deleteBook0").addEventListener('click', deleteBook(book0Att, myLibrary))

document.getElementById("deleteBook1").addEventListener('click', deleteBook)

//Class and Object Code
function Book(name,pages,read){
  this.name = name;
  this.pages = pages;
  this.read = read;
}

//Test Data
let fireAndBlood = new Book("Fire and Blood",588,"Yes");
myLibrary[0] = fireAndBlood; 

let gameOfThrones = new Book("Game of Thrones", 222, "No")
myLibrary[1] = gameOfThrones; 



//Functions
function showBooks(){
for(let i = 0; i < myLibrary.length; i++){
//Create variables to reference each table element in DOM for display
let nameVar= "book" + i + "Name";
let pagesVar= "book" + i + "Pages"
let readVar = "book" + i + "Read";
//Use variable string values to reference DOM elements by ID
//Set Element text to Book Values from myLibrary Array
  document.getElementById(nameVar).innerText = myLibrary[i].name;
  document.getElementById(pagesVar).innerText = myLibrary[i].pages;
  document.getElementById(readVar).innerText = myLibrary[i].read;
  }

}

function addBookToLibrary(){

let name = document.getElementById("addBookName").value;
let bookName = document.getElementById("addBookName").value;
let bookPages = document.getElementById("addBookPages").value;
let bookRead = document.getElementById("addBookRead").value;

var holder = new Book(bookName, bookPages, bookRead);

myLibrary.push(holder);
}

// Delete function uses the 5th character of 
// the book to be deleted's ID to splice out the correct book from
// the myLibrary array
function deleteBook(holder, aryay){
  //Split holder string value into new array
  let arr = holder.split('');
  // console.log(holder);
  // Use correspondance between 5th character of array to delete item from myLibrary
  // console.log(arr[4]);
  // console.log(arr)
  const arr2 = arr[4]
  try{
delete myLibrary[arr2]}
catch{console.error();}

  // const arr2 = myLibrary.splice(arr[4], 1); 
alert(myLibrary);


  // console.log(myLibrary)
  showBooks();
  }









