var person = "tanveer arshad";

function toTitleCase(person) {
    return person.split(' ').map(function(title) {
        return title.replace(title[0], title[0].toUpperCase());
      }).join(' ');
    }

console.log(person.toUpperCase());
console.log(person.toLowerCase());
console.log(toTitleCase(person));