The Dependency Inversion Principle (DIP) in Java states that high-level modules/classes 
should not depend on low-level modules/classes directly. Instead, they should depend on
 abstractions (interfaces or abstract classes), and the implementations should depend on 
 these abstractions. 
This principle encourages decoupling between classes, promoting flexibility and ease of
 modification.

Explanation:
Imagine a scenario where a high-level module directly depends on a low-level module. 
Any change in the low-level module might directly impact the high-level module, leading
 to code that's rigid and hard to change. DIP suggests using interfaces or abstract classes
  to decouple these dependencies.
  // Violating DIP with direct dependencies
class LightSwitch {
    public void turnOn() {
        // Implementation to turn on the light
    }
}
/* dirty code */
class Room {
// Following DIP using interfaces and abstractions
// Violating DIP with direct dependencies
class LightSwitch {
    public void turnOn() {
        // Implementation to turn on the light
    }
}

class Room {
    private LightSwitch lightSwitch;

    public Room() {
        this.lightSwitch = new LightSwitch();
    }

    public void enterRoom() {
        lightSwitch.turnOn();
    }
}

/* dIP following code */
// Violating DIP with direct dependencies
class LightSwitch {
    public void turnOn() {
        // Implementation to turn on the light
    }
}

class Room {
    private LightSwitch lightSwitch;

    public Room() {
        this.lightSwitch = new LightSwitch();
    }

    public void enterRoom() {
        lightSwitch.turnOn();
    }
}

