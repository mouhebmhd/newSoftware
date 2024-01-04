/*
 * SOLID
 * S or SPR Single Responsability Principle
 * O or OCP Open Closed Principle 
 * L or LSP Liskov Substitution Principle
 * I or ISP  Interface Seggragation Principle
 * D or DIP  Dependency Inversion Principle
 * 
*/
Each Class Has One Responsibility: Each Java class should focus on doing just one thing and
 doing it well. 
 For instance:

*Car class handles car-related functionalities like accelerating, braking, and steering.
*MusicPlayer class manages playing, pausing, or stopping music.
*FuelCalculator class calculates fuel efficiency, consumption, etc.

Why the SRP?
-Clear Separation of Concerns: Different functionalities are divided into separate classes,
 ensuring a clear distinction between them.

-Easier Maintenance and Understanding: When each class has a single responsibility,
 it becomes easier to understand, modify, and maintain the code.

-Reduced Code Coupling: Classes become less dependent on each other because they handle 
distinct tasks. Changes in one class are less likely to affect other classes.

-Improved Reusability: Focused classes are more reusable since they handle specific tasks. 
For instance, the MusicPlayer class can be used across different parts of the application that require music functionality.

-In essence, SRP promotes a modular and organized approach to software development in Java
 by ensuring that each class does one specific job, making the code more manageable and 
 flexible.

 /*dirty Code */
 // Car class handling multiple responsibilities
class Car {
    private String brand;
    private double fuelLevel;

    public Car(String brand, double fuelLevel) {
        this.brand = brand;
        this.fuelLevel = fuelLevel;
    }

    public void drive(double distance) {
        // Driving logic
        // ...
        System.out.println(brand + " is driving " + distance + " miles.");
        fuelLevel -= distance * 0.1; // Reducing fuel level (an unrelated responsibility)
    }

    public void playMusic() {
        // Music playing logic
        // ...
        System.out.println("Playing music in " + brand);
    }
}
/*SRP Following code  */
// Separating concerns into different classes

// Car class handles only driving-related responsibilities
class Car {
    private String brand;
    private double fuelLevel;

    public Car(String brand, double fuelLevel) {
        this.brand = brand;
        this.fuelLevel = fuelLevel;
    }

    public void drive(double distance) {
        // Driving logic
        // ...
        System.out.println(brand + " is driving " + distance + " miles.");
        fuelLevel -= distance * 0.1; // Reducing fuel level (driving responsibility)
    }
}

// MusicPlayer class handles music-related responsibilities
class MusicPlayer {
    public void playMusic(String brand) {
        // Music playing logic
        // ...
        System.out.println("Playing music in " + brand);
    }
}
