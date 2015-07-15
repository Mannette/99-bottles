// 99 bottles of beer on the wall.
// 99 bottles of beer.
// Take one down, pass it around.
// 98 bottles of beer on the wall.

// var x = number of bottles.
var first = ("bottles of beer on the wall.");
var second = ("bottles of beer.");
var third = ("Take one down, pass it around.");
for (var x = 99; x > 0; x--) {
  if (x > 1){
    // console.log(x);
    console.log(x + " " + first);
    console.log(x + " " + second);
    console.log(third);
  }
  else {
    console.log(x + " " + "bottle of beer on the wall." + " " + x + " " + "bottle of beer. Take it down, pass it around.");
    console.log("There will be no more bottles of beer on the wall.");
    console.log("Now there are no more bottles of beer on the wall.");
  }
}
