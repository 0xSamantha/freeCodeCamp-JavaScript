// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
const arr = [...bookList];
function add(arr, bookName) {
  return [...arr, bookName];
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    const newArr = [...arr];
    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
  }
}
