"use strict";

console.log(mergeSort([1, 3, 5, 6, 4]))

//*************************************************************
function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }

  var left = list.slice(0, list.length / 2);
  var right = list.slice( list.length / 2, list.length);
  return right; 
  // merge(mergeSort());
}

//*************************************************************
// HELPERS
//
function merge(l, r) {
  var merged = [];
  return merged; 
}
//
// list 
// mergeSort
// merge
