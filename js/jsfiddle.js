const myLibrary = [];

//Event Listeners
document.getElementById("showBooks").addEventListener('click', showBooks)
document.getElementById("addBooks").addEventListener('click', addBookToLibrary)
const book0Att = document.getElementById("book0Name").id
document.getElementById("deleteBook0").addEventListener('click', deleteBook0)

document.getElementById("deleteBook1").addEventListener('click', deleteBook1)
document.getElementById("changeReadStatusBook0").addEventListener('click', changeReadStatusBook0)
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
document.getElementById(nameVar).innerText = "";
document.getElementById(pagesVar).innerText = "";
document.getElementById(readVar).innerText = "";

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
function deleteBook0(){
  const holder0 = myLibrary.splice(0, 1)
  
  showBooks();
  
  return console.log(myLibrary[0])
  
  }

  function deleteBook1(){
    const holder1 = myLibrary.splice(1, 1)
    
    showBooks();
    
    return console.log(myLibrary[1])
    
    }
    function changeReadStatusBook0(){
      console.log("BAHABHAB")
if(myLibrary[0].read == "Yes"){
  let bookName = "No";
      myLibrary[0].read === "No"
      // document.getElementById("book0Readd").setAttribute(book0Readd, "No");
  
      document.getElementById("book0Readd").value = "No"
      document.getElementById("book0Readd").value = bookName
      showBooks();
      console.log(myLibrary[0].read)
    }
      else if(myLibrary[0].read === "No"){
        myLibrary[0].read === "Yes"
      document.getElementById("book0Read").innerText = myLibrary[0].read
      document.getElementById("book0Read").value = "Yes"
      showBooks();
      }
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









