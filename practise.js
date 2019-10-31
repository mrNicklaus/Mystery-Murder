//Your Code:

//Answer

// change the value of `room` and `suspect` to test your code
var room = "ballroom";

var suspect = "Mr. Kalehoff";

var weapon = "";

var solved = false;

if (room === "gallery" && suspect ==="Ms. Van Cleve" ) {

console.log("Ms. Van Cleve did it in the gallery with the trophy!");

} else if (room === "dining room" && suspect ==="Mr. Parkes") {

console.log("Mr. Parkes did it in the dining room with the knife!");

} else if (room === "billiards room" && suspect ==="Mrs. Sparr") {

console.log("Mrs. Sparr did it in the billiards room with the pool stick!");

} else {

console.log("Mr. Kalehoff did it in the ballroom with the poison!");

}

if (solved) {

console.log(suspect + " did it in the " + room + " with the " + weapon);

}
