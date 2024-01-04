The Interface Segregation Principle (ISP) in Java suggests that a class should not be 
forced to implement interfaces it doesn't use. It emphasizes creating multiple, smaller,
 and more specific interfaces rather than one large interface.

Let's illustrate this with an example:

Explanation:
Consider a scenario where there's a Worker interface that has methods related to both
 office work and manufacturing work. If a class implements this interface, it will be
  forced to provide implementations for all the methods, even if it doesn't use them all.
 This violates ISP.
 /* dirty code */
 // Violating ISP with a single large interface
interface Worker {
    void doOfficeWork();
    void doManufacturingWork();
}

class OfficeWorker implements Worker {
    @Override
    public void doOfficeWork() {
        // Office work implementation
    }

    @Override
    public void doManufacturingWork() {
        // Empty implementation, not relevant for OfficeWorker
    }
}

class FactoryWorker implements Worker {
    @Override
    public void doOfficeWork() {
        // Empty implementation, not relevant for FactoryWorker
    }

    @Override
    public void doManufacturingWork() {
        // Manufacturing work implementation
    }
}
/* Following ISP  */
// Applying ISP with smaller, specific interfaces
interface OfficeWorker {
    void doOfficeWork();
}

interface FactoryWorker {
    void doManufacturingWork();
}

class OfficeEmployee implements OfficeWorker {
    @Override
    public void doOfficeWork() {
        // Office work implementation
    }
}

class FactoryEmployee implements FactoryWorker {
    @Override
    public void doManufacturingWork() {
        // Manufacturing work implementation
    }
}
