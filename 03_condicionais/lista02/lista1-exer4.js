const leia = require('readline-sync')

palavra1 = leia.question("vertebrado ou invertebrado? ")
if (palavra1 == "vertebrado") {
    palavra2 = leia.question("ave ou mamifero? ");
    if (palavra2 == "ave") {
        palavra3 = leia.question("carnivoro ou onivoro? ")
        if (palavra3 == "carnivoro") {
            console.log("Águia");
        } else if (palavra3 == "onivoro") {
            console.log("Pomba");
        }
    } else if (palavra2 == "mamifero") {
        palavra3 = leia.question("onivoro ou herbivoro? ")
        if (palavra3 == "onivoro")
            console.log("Homem");
        else if (palavra3 == "herbivoro")
            console.log("Vaca");
    }
} else {
    palavra2 = leia.question("inseto ou anelideo? ");
    if (palavra2 == "inseto") {
        palavra3 = leia.question("hematofago ou herbivoro? ")
        if (palavra3 == "hematofago")
            console.log("Pulga");
        else if (palavra3 == "herbivoro")
            console.log("Lagarta");
    } else if (palavra2 == "anelideo") {
        palavra3 = leia.question("hematofago ou onivoro? ")
        if (palavra3 == "hematofago")
            console.log("Sanguessuga");
        else if (palavra3 == "onivoro")
            console.log("Minhoca");
    }
}