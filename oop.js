//Programmation orientee' objet
//exemple de depart
//personne1 nom prenom age
/* var nom1="BA";
var prenom1="Youssef";
var age1=24; */
var personne1 = {
  nom: "BA",
  prenom: "Youssef",
  age: 24,
};
//personne2 nom prenom age email
/* var nom2="Trabelsi";
var prenom2="Ahmed";
var age2=30;
var email2="ahmedTR@gmail.com"; */
var personne2 = 
{
  nom: "Trabelsi",
  prenom: "Ahmed",
  age: 30,
  email: "ahmedTR@gmail.com",
};
//personne3 email age
/* var email3 = "user@gmail.com";
var age3 = 36; */
var personne3=
{
    email:"user@gmail.com",
    age:36
}
/**
 * Problemes 
 * trop de variables=gaspillage des ressources // on peut optimiser 
 * pas de regroupement 
 * probleme d'appellation
 * 
 * Solution on va utiliser les objets pour representer chaque personne 
    * trop de variables=gaspillage des ressources // on peut optimiser  Resolu
    * pas de regroupement Resolu
    * probleme d'appellation Resolu
    * Nouveaux problemes 
    * lorsque on veut ajouter une nouvelle personne ,on doit definir de nouveau ses informatiosn
    * abscence d'une forme unique (pas les memes informations)
 */
/* console.log(personne1)
console.log(personne2)
console.log(personne3) */
//personne 4 nom age email prenom 
var personne4=
{
    nom:"Ben Youssef",
    prenom:"Imen",
    genre:"F",
    email:"imenBA@gmail.com",
}
/**
 * le premier composant/element == objets
 * objets=Attributs/Proprietes+Methods/fonctions
 * Enseignant+Etudiant+Administrateur
 * le deuxieme composant les classes 
 * exemple/particulier ---X--> generale
 * generale ---->exemple
 * 
 * 
 * nomPropriete=valeur
 * age=24
 * personne Attributs : nom prenom age email
 * personne Methodes : parler manger boire chanter
 * difference entre objet et classe
 * les classes possedent des proprietes 
 * les objets possedent des proprietes 
 * les objets possedent des valeurs  
 * les classes ne possedent pas des valeurs 
 * objet=classe+valeur
 */

class Personne{
    //proprietes
    constructor(valeurNom,valeurPrenom,valeurAge,valeurGenre)
    {
        this.nom=valeurNom
        this.prenom=valeurPrenom
        this.age=valeurAge
        this.genre=valeurGenre
    }

    //methodes
    parler()
    {
        console.log("bla bla bla ")
    }
    manger()
    {
        console.log("im eating right now")
    }
    boire()
    {
        console.log("im drinking")
    }
    chanter()
    {
        console.log("sing sing sing ")
    }
    presentezVous()
    {
        console.log("Bonjour je m'appelle "+this.nom+" "+this.prenom);
        console.log("J'ai "+this.age+" ans")
    }
    incrementerAge()
    {
       this.age=this.age+1 
    }
    changerNom(nouveauNom)
    {
        this.nom=nouveauNom;
    }
    changerPrenom(nouveauPrenom)
    {
        this.prenom=nouveauPrenom;
     
    }
}
var p1=new Personne("trabelsi","ahmed",5,"Homme");
var p2=new Personne("ben ali","youssef",8,"Homme");
/* 
p2.presentezVous()
p2.changerPrenom()
p2.presentezVous() */
class Voiture
{
    constructor(matriculeV,couleurV,puissanceV,anneeSortieV)
    {
        this.matricule=matriculeV;
        this.couleur=couleurV;
        this.puissance=puissanceV;
        this.anneeSortie=anneeSortieV;
    }
    augmenterPuissance(valeurAajouter)
    {
        this.puissance=this.puissance+valeurAajouter;
    }

}
var v1=new Voiture("198 Tu 2023","bleu",80,2005)
var v2=new Voiture("54 Tu 2023","rouge",60,2000)
console.log(v1)
v1.augmenterPuissance(60)
console.log(v1)
console.log(v1)