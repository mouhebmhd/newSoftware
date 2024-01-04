
The Liskov Substitution Principle (LSP) in Java states that objects of a superclass 
should be replaceable with objects of its subclasses without affecting the correctness
 of the program. 
Put simply, if S is a subtype of T, then objects of type T can be replaced with objects
 of type S without altering the desired properties of the program.

Lets break it down further with an example:

Explanation:
Consider a superclass Rectangle and its subclass Square. According to LSP, if Square 
is a subtype of Rectangle, you should be able to use a Square wherever a Rectangle is
expected without causing issues.
/* dirty code  */
class Rectangle {
    protected int width;
    protected int height;

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int calculateArea() {
        return width * height;
    }
}

class Square extends Rectangle {
    @Override
    public void setWidth(int width) {
        this.width = width;
        this.height = width;
    }

    @Override
    public void setHeight(int height) {
        this.height = height;
        this.width = height;
    }
}
/* Adhering to LSP */
abstract class Shape {
    public abstract int calculateArea();
}

class Rectangle extends Shape {
    protected int width;
    protected int height;

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    @Override
    public int calculateArea() {
        return width * height;
    }
}

class Square extends Shape {
    private int side;

    public void setSide(int side) {
        this.side = side;
    }

    @Override
    public int calculateArea() {
        return side * side;
    }
}


/** 
 * 
 *Personne nom prenom direBonjour() "bonjour je suis une personne"
 Developpeur ->Personne
 Developpeur nom prenom direBonjour() "bonjour je suis un developpeur"
 */

 /*
  * Rectangle width height
  * Square width = height
  */
  