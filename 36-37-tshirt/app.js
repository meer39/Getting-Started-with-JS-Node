function make_tshirt(size = "large", message = "I love javascript") {
    if(size == "large" || size == "medium")
        console.log(`The shirt of size ${size.toUpperCase()} stated message "${message}"`);
    else
        console.log(`The shirt of size ${size.toUpperCase()} stated message "${message}"`);
}

make_tshirt("large","I still love javascript");