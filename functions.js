/* var a=8;
var b=9;
if(a>b)
{
    console.log("le premier entier est plus grand");
}
else if (b>a)
{
    console.log("le deuxieme entier est plus grand");
}
else
{
    console.log("les deux entiers sont egaux");
}
var c=12;
var d=124;
if(c>d)
{
    console.log("le premier entier est plus grand");
}
else if (c<d)
{
    console.log("le deuxieme entier est plus grand");
}
else
{
    console.log("les deux entiers sont egaux");
}
var e =11;
var f=11;
if(e>f)
{
    console.log("le premier entier est plus grand");
}
else if (f>e)
{
    console.log("le deuxieme entier est plus grand");
}
else
{
    console.log("les deux entiers sont egaux");
} */
//function/method
//procedure
// ALGORITHME
//  fonction :des modeules qui retournes des types primitives
//  Procedures :des modeules qui ne  retournes pas des types primitives
//les types primitives int float string boolean
//les types non primitives tableau,objet...
function comapareIntegers(x,y)
// function comapareIntegers(x,y) --> signature
// x,y are called parameters/arguments
{
    if(x>y)
    {
       console.log(x);
    }
    else 
    {
       console.log(y);
    }
   
}
//JAVASCRIPT
// si le mot return existe --> fonction (on doit recevoir le resultat dans une variable)
// si le mot return est abscente --> Procedure on peut executer le bloc directement
/* var a=8;
var b=10;
comapareIntegers(a,b);
var c=18;
var d=9;
comapareIntegers(c,d);
var e=111;
var f=111;
comapareIntegers(e,f);
 */
/* var number1=parseInt(prompt("donner la premier valeur"));
var number2=parseInt(prompt("donner la deuxieme valeur"));
comapareIntegers(number1,number2); */

/* var number1=parseInt(prompt("donner le premier entier"));
do
{
    var number2=parseInt(prompt("donner le deuxieme entier"))
}
while(number1!=number2);

comapareIntegers(number1,number2) */
//condition number2!=number1
/*

do-while
while
*/
/* var messageGlobale="good morning";
function printMessage()
{
    console.log(messageGlobale)
    let  messageLocale="good night"
    console.log(messageLocale)
}
printMessage() */
//fonction
function getMax(a,b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
var max=getMax(18,6)
console.log(max)