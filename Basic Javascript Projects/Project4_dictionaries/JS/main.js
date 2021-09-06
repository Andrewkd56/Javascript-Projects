function my_Dictionary() {//creating a function to create a dictionary
    var Pokemon = {//var is pokemon for what we are describing
        Type:"Fire",//its type
        Gender:"Male",//its gender
        Color:"Orange",
        Level:36,
        Name:"Charizard"
    };
    delete Pokemon.Type; //here we used an operator as a word to delete part of our dictionary
    document.getElementById("Dictionary").innerHTML = Pokemon.Type;
}

