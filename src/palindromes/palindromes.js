const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  // Remove all spaces and punctuation from the sentence and make all characters lowercase.
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Declare middle var = 1/2 length of sentence rounding down for odd-length strings
  let middle = Math.floor(sentence.length/2);
  // Initialize a new stack
  const newStack = new Stack();
  // Iterate through the sentence, from the first character up to middle.
  for (let i = 0; i < middle; i++) {
  // Push each character onto the stack.
    let character = sentence[i];
    newStack.push(character);
  }
/* 
If the sentence is an odd length, 
then iterate from middle+1 to skip the middle character of 
the sentence.
*/
  middle += sentence.length % 2 === 0 ? 0 : 1;

/* 
On each iteration, pop a character from the stack and compare it to the current character. 
If they don't match, return false.
*/

  for (let i = middle, limit = sentence.length; i < limit; i++) {
    let poppedChar = newStack.pop();
    if (sentence[i] !== poppedChar) {
      return false; 
    }
  }
// When loop is done, return true
  return true; 
};

module.exports = isPalindrome;
