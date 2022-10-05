var alienColor = ["green", "yellow", "red"];

var randomColor = Math.floor(Math.random() * alienColor.length);

console.log(alienColor[randomColor]);
// 25
if(alienColor[randomColor] == "green"){
    console.log("Congrates you earned 5 points");
}

// 26
if(alienColor[randomColor] == "green"){
    console.log("Congrates you earned 5 points");
} else if (alienColor[randomColor] != "green"){
    console.log("Congrates you earned 10 points");
}

// 26
if(alienColor[randomColor] == "green"){
    console.log("Congrates you earned 5 points");
} else if (alienColor[randomColor] == "yellow"){
    console.log("Congrates you earned 10 points");
} else if (alienColor[randomColor] == "red"){
    console.log("Congrates you earned 15 points");
}