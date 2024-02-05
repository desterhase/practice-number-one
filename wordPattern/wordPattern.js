"use strict";

module.exports = {
  wordPattern: main,
};

//*************************************************************
// given a pattern and a string s, find if s follows the same pattern.
//
// here follow means a full match, such that there is a bijection between a letter
// in a pattern and a nonempty word in s
//
// example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
//
// example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
function main(pattern, s) {
  let map = {};
  let words = s.split(" ");

  // not concerned about words that don't have matching lengths. by default cannot be following
  // the same patter.
  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    // every letter that is not in the map is added and associated with the corresponding word in the 's'
    // if a letter is re-encountred, the map is checked, and if the corresponding word
    // Documents't match up with the letter on the map, then it is a false operation
    // if every duplicated letter has a corresponding word that agrees with the map, then it is a true operation.

    if (!map[pattern[i]]) {
      map[pattern[i]] = words[i];
    } else if (map[pattern[i]]) {
      if (words[i] !== map[pattern[i]]) {
        return false;
      }
    }
  }
  return true;
}

//*************************************************************
// HELPERS
