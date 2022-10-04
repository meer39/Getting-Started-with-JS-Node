var locations = ["Naran","Kaghan","Hunza","Karachi","Daska"];

console.log("Original Array");
console.log(locations+"\n");

var alphabaticSorting = [].concat(locations);
alphabaticSorting.sort();
console.log("Alphabatic Sorting");
console.log(alphabaticSorting+"\n");

console.log("Original Array");
console.log(locations+"\n");

var reverseSorting = [].concat(locations);
reverseSorting.sort();
reverseSorting.reverse();
console.log("Rreverse Sorting");
console.log(reverseSorting+"\n");

console.log("Original Array");
console.log(locations+"\n");

var againReverseSorting = [].concat(locations);
againReverseSorting.sort();
againReverseSorting.reverse();
console.log("Again Rreverse Sorting");
console.log(againReverseSorting+"\n");

console.log("Original Array");
console.log(locations+"\n");

var againAlphabaticSorting = [].concat(locations);
againAlphabaticSorting.sort();
console.log("Again Alphabatic Sorting");
console.log(againAlphabaticSorting+"\n");

var onceAgainReverseSorting = [].concat(locations);
onceAgainReverseSorting.sort();
onceAgainReverseSorting.reverse();
console.log("Again Rreverse Sorting");
console.log(onceAgainReverseSorting+"\n");