var magicians = ["Zakuta", "Chris", "Micheal"];

function show_magicians(magicians){
    console.log(magicians);
}

show_magicians(magicians);

function make_great(magicians){
    magicians.forEach(element => {
        console.log(element+" Great");
    });
    magicians = this.magicians;
}

make_great(magicians);
show_magicians(magicians);
