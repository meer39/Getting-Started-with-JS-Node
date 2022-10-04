var guests = ["Saad","Ali","Sanan"];

function invitation(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`Hi ${list[i].toUpperCase()}, I would love to invite you on dinner this weekend`);
    }
    console.log("\n");
}

invitation(guests);

console.log(`Unfortunatly ${guests[2]} can't come.\n`);

guests[2] = "Cheema";

invitation(guests);

console.log(`Great News! I just found bigger table so more people can come to the dinner.\n`);

guests.unshift("Tanveer");
guests.splice(3,0,"Shahzaib");
guests.push("Talha");

invitation(guests);

console.log(`Unfortunatly there is a small problem and I can only two person.\n`);

for (let i = 0; i < guests.length; i++) {
    do {
        console.log(`${guests.shift()} has been removed`);        
    } while (guests.length > 3);
}
console.log(`\n`);
invitation(guests);
guests=[];
console.log("Final Array: ", guests);

module.exports = {
    guestsList: function() {
       return guests;
    }
 }