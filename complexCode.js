/* 
Filename: complexCode.js
Content: A complex JavaScript code demonstrating a simulated virtual universe with various entities, interactions, and behaviors.
*/

// Entity class to represent various objects in the virtual universe
class Entity {
  constructor(name, type, position) {
    this.name = name;
    this.type = type;
    this.position = position;
  }

  setPosition(x, y, z) {
    this.position = { x, y, z };
  }

  moveBy(x, y, z) {
    this.position.x += x;
    this.position.y += y;
    this.position.z += z;
  }

  displayInfo() {
    console.log(`Entity - Name: ${this.name}, Type: ${this.type}, Position: (${this.position.x}, ${this.position.y}, ${this.position.z})`);
  }
}

// Interaction class to represent interactions between entities
class Interaction {
  constructor(entityA, entityB, type) {
    this.entityA = entityA;
    this.entityB = entityB;
    this.type = type;
  }

  performInteraction() {
    console.log(`${this.entityA.name} and ${this.entityB.name} perform ${this.type} interaction.`);
  }
}

// Creating entities
const entity1 = new Entity("Entity 1", "Type A", { x: 0, y: 0, z: 0 });
const entity2 = new Entity("Entity 2", "Type B", { x: 5, y: 10, z: 15 });

// Moving entities
entity1.moveBy(2, 3, 1);
entity2.setPosition(20, 30, 25);

// Displaying entity information
entity1.displayInfo();
entity2.displayInfo();

// Creating interactions
const interaction1 = new Interaction(entity1, entity2, "Collision");
const interaction2 = new Interaction(entity2, entity1, "Attraction");

// Performing interactions
interaction1.performInteraction();
interaction2.performInteraction();

// More code below... (Elaborate and complex logic with additional entities, behaviors, and interactions)