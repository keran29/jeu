//DECOURAGER ! 
//MERCI CODECADEMY !!!  
//-------------------------------


var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");

var choixOrdi = Math.random();

if (choixOrdi < 0.34) {
    choixOrdi = "pierre";

} else if(choixOrdi <= 0.67) {
    choixOrdi = "feuille";
} else {
    choixOrdi = "ciseaux";
}

var comparer = function(choix1,choix2)
{

    if(choix1 === choix2) {
        return "Egalité !";
    }

    else if

        (choix1 === "pierre")

    { if(choix2 === "ciseaux")

    {return "pierre gagne !"}

     else { return "feuille gagne !"}
    }

    else if

        (choix1 === "feuille")

    { if(choix2 === "pierre")

    {return "feuille gagne"}

     else { return "ciseaux gagnent !"}
    }

    else if

        (choix1 === "ciseaux")

    { if(choix2 === "feuille")

    {return "ciseaux gagnent !"}

     else { return "pierre gagne !"}
    }

};

alert("Vous avez choisi : " + choixUtilisateur);

alert("J'ai choisi : " + choixOrdi);
comparer(choixOrdi,choixUtilisateur);

alert("LE GAGNANT EST : " + choixOrdi);


