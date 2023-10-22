/*
  Filename: ComplexCodeExample.js
  Content: A complex and sophisticated code example showcasing various JavaScript concepts and techniques.
*/

// Global variables
const PI = Math.PI;
let currentYear = new Date().getFullYear();

// Helper functions

// Calculate the area of a circle
function calculateCircleArea(radius) {
  return PI * Math.pow(radius, 2);
}

// Check if a given year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Class definition for a Shape object
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // Method to get the shape's name
  getName() {
    return this.name;
  }

  // Abstract method to get the area of a shape
  getArea() {
    throw new Error("Method not implemented");
  }
}

// Class definition for a Circle object that extends Shape
class Circle extends Shape {
  constructor(radius, color) {
    super("Circle", color);
    this.radius = radius;
  }

  // Method to get the area of a circle
  getArea() {
    return calculateCircleArea(this.radius);
  }
}

// Class definition for a LeapYearChecker object
class LeapYearChecker {
  constructor() {
    this.leapYears = [];
  }

  // Method to find leap years between two given years
  findLeapYears(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
      if (isLeapYear(year)) {
        this.leapYears.push(year);
      }
    }
  }

  // Method to get the leap years found
  getLeapYears() {
    return this.leapYears;
  }
}

// Usage

// Creating a circle object
const myCircle = new Circle(5, "red");
console.log(`Shape name: ${myCircle.getName()}`);
console.log(`Shape color: ${myCircle.color}`);
console.log(`Circle area: ${myCircle.getArea()}`);

// Find leap years between 2000 and the current year
const leapYearChecker = new LeapYearChecker();
leapYearChecker.findLeapYears(2000, currentYear);
console.log("Leap years found:");
console.log(leapYearChecker.getLeapYears());

// ... Continue with more code and functionality ...

// End of ComplexCodeExample.js