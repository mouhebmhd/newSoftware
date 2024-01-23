/* var prenom1="Ahmed";
var nom1="Trabelsi";
var age1=24;

var prenom2="Imen";
var nom2="Sfaxi";
var age2=26;
var age2=26;

var prenom3="Mouhamed";
var nom3="Trabelsi";
var age3=28;
 */
//plusieurs variables


//ceci n'est pas une representation fiable
/* var noms=
{
    nom1:"trabelsi",
    nom2:"sfaxi",
    nom3:"trabelsi"
}
var prenoms=
{
    prenom1:"ahmed",
    prenom2:"imen",
    prenom3:"mouhamed"
} */






/* 
var personne1=
{
prenom:"Ahmed",
nom:"Trabelsi",
age:24
};
var personne2=
{
    nom:"Trabelsi",
    prenom:"Imen",
    age:26
}
var personne3=
{
nom:"Trabelsi",
prenom:"Mouhamed",
age:28,
}
console.log(personne1);
delete personne1.age;
console.log(personne1); */

/* if("dateNaissance" in personne2)
{
    console.log("la 2eme personne possede la propriete age")
}
else{
    console.log("la deuxieme personne ne possede pas la propriete age")
} */
/**
 * declaration d'un objet 
 * var nomObjet=
 {
    prop1:val1,
    prop2:val2,
    ...propN:valN
 }
 * lecture/affectation     nomVariable.propriete=valeur exp personne1.age=35 / nomVariable["propriete"]=valeur exp personne1["age"]=35
 * ecriture         console.log(nomVariable.prop)    console.log(nomVariable["prop"])
 * ajout   nomVariable.nouvelleProp=valeur
*/


var maCarteIdentite=
{
    identifiant:             123,
//  key/attribut/propriete  :    value
    prenom:"Youssef",
    nom:"Ben Ali",
    dateNaissance:"01/01/1998",
    nationalite:"Tunisienne",
    email:"youssefba@gmail.com"
};

/* 
Suppression d'une propriete
console.log(maCarteIdentite);

delete maCarteIdentite.email;

console.log(maCarteIdentite); */
//affichage de la liste des proprietes identifiant,nom,prenom....
//console.log(Object.keys(maCarteIdentite))
//affichage des valeurs "123","ahmed"
//console.log(Object.values(maCarteIdentite))
//verifier si un objet possede une propriete bien definie
//console.log("identifiant" in maCarteIdentite);

/* var prenom="youssef";
var nom="abdallah"; */
//construction d'un objet
var etudiant1=
{
    nomEtudiant:"abdallah",






    prenomEtudiant:"youssef"
}
//object destruction
/* var {nomEtudiant,prenomEtudiant}=etudiant1;
console.log(prenomEtudiant) */
//ajouter une propriete a un objet
/* 
var newCarte={...maCarteIdentite,photo:"myphoto.png"}
console.log(newCarte) */
 maCarteIdentite={...maCarteIdentite,password:"123"} 
var nouvelleCarteIdentite={};
console.log(Object.keys(etudiant1).length)