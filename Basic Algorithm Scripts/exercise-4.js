// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    let maxLength = 0;
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // If the current word's length is greater than the previous max length, update max length
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  