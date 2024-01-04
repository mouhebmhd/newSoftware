//lire deux entier donnees par l'utilisateur
//condition nbr2>nbr1
/* var nbr1=parseInt(prompt("donner le premier nombre"));
var tentatives=0;
do{
    var nbr2=parseInt(prompt("donner le deuxieme nombre"));
    tentatives+=1;
}while(nbr2<=nbr1)
console.log("vous avez donnee un nombre valide apres "+tentatives +" tentatives")
for(var counter=nbr1;counter<=nbr2;counter++)
{
   if(counter!=8)
   {
    console.log(counter);
   }
   else
   {
    continue;
   }
}  */
/* var compteur=nbr1; */
/* while(compteur<=nbr2)
{
    console.log(compteur);
    compteur+=1;
}
 */
/* do
{
    console.log(compteur);
    compteur+=1;
}
while(compteur<=nbr2)
 */
















/**
 for(var compteur=valeurInitiale;compteur< ou <= valuerFinale;compteur++){}
 while(condition qui execute le code de nouveau){instructions}
 do{instructions}while(condition qui execute le code de nouveau)
 */

function somme(a,b)
{
    console.log(a+b);
}
function soustraction(a,b)
{
    console.log(a-b)
}
function multiplication(a,b)
{
    console.log(a*b)
}
function division(a,b)
{
    console.log(a/b)
}
var nbr1=parseInt(prompt("donner le premier nombre"));
var nbr2=parseInt(prompt("donner le deuxieme  nombre"));
// demander a l'utilisateur de donner un operateur + - * /
// + executer la methode somme
// - executer la methode soustraction
// * executer la methode multiplication
// / executer la methode division
/* var ops=['+','-','/','*'] */
//solution 1
/* do{
    var o =prompt("Donner l'opérateur'");
    }
    while {o =="+" || o == "-" || o == "*" || o== "/"};
 */
//solution 2
/* do
{
    op=prompt(" donner l'operateur") 
    if (op=='*') 
    {
        multiplication(a,b) ; 
        break;
    }
    else if (op=="+") 
   {
    somme(a,b);
    break;
    }
     else if (op=="-")
     { 
        soustraction(a,b);
        break;
    }
    else if (op=='/')
    {
        division(a,b);
        break;
    }
    else
    {
        console.log("operateur invalide")
    }

}
while(op!="+" && op!="-" && op!="*" && op!="/") */
//solution 3
 do{
    var op =prompt("Donner l'opérateur'");
    
}
while(op !="+" && op != "-" && op != "*"&& op!= "/");

function calculer(a,b,operateur)
{
    if (operateur=='*') 
    {
        multiplication(a,b) ; 
    }
    else if (operateur=="+") 
   {
    somme(a,b);
    }
     else if (operateur=="-")
     { 
        soustraction(a,b);
    
    }
    else 
    {
        division(a,b);
    }
}
calculer(nbr1,nbr2,op);
calculer(nbr1,nbr2,op);