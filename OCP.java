The Open-Closed Principle (OCP) in Java states that classes should be open for extension
 but closed for modification. This means you should be able to extend a 
class's behavior without modifying its source code. Here's an explanation along with a basic
 example:

Explanation:
*Open for Extension: You can add new functionalities or behaviors to a class by extending
 it or adding new code without altering its existing implementation.
*Closed for Modification: Once a class is written and tested, its code should not be changed.
 Instead, it should be extended or modified through inheritance or composition.

 /* dirty code */
 // Shape class violating OCP
class Shape {
    private String type;

    public Shape(String type) {
        this.type = type;
    }

    public void draw() {
        if (type.equals("square")) {
            System.out.println("Drawing square");
        }
        // More shapes and drawing logic can lead to modification of this class.
    }
}
/*OCP Followng code  */
// Applying OCP through abstraction and extension

// Shape interface defining the draw method
interface Shape {
    void draw();
}

// Circle class implementing the Shape interface
class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

// Square class implementing the Shape interface
class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing square");
    }
}

// New shapes can be added by extending the Shape interface
class Triangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing another shape");
    }
}
class Recatangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing another shape");
    }
    class Recatangle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing another shape");
        }
        
}