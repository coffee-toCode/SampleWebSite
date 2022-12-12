/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */


function translatePigLatin(str) {
     return str
     .replace(/^[aeiou]\w*/, "$&way")
     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
 }
   
translatePigLatin("consonant"); 
   

//  function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

// // test here
// translatePigLatin("consonant");
// Code Explanation
// Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case. If the first letter is a consonant nothing will happen at this point.
// Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end. */


//  https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039