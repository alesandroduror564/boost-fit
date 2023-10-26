/* This code is for a complex web application that manages inventory for an e-commerce platform.
   Filename: inventory_management.js */

// Class representing a product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalValue() {
    return this.price * this.quantity;
  }
}

// Class representing the inventory system
class InventoryManagementSystem {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getTotalInventoryValue() {
    let totalValue = 0;
    for (const product of this.products) {
      totalValue += product.calculateTotalValue();
    }
    return totalValue;
  }

  getProductByName(name) {
    return this.products.find(product => product.name === name);
  }

  getProductsByPriceRange(minPrice, maxPrice) {
    return this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }
}

// Creating instance of InventoryManagementSystem
const inventory = new InventoryManagementSystem();

// Adding products to the inventory
inventory.addProduct(new Product("Product A", 10, 5));
inventory.addProduct(new Product("Product B", 15, 3));
inventory.addProduct(new Product("Product C", 20, 2));

// Removing a product from the inventory
const productToRemove = inventory.getProductByName("Product B");
inventory.removeProduct(productToRemove);

// Retrieving products within a specific price range
const filteredProducts = inventory.getProductsByPriceRange(10, 25);

console.log("Filtered Products:");
console.log(filteredProducts);

console.log("Total Inventory Value: $" + inventory.getTotalInventoryValue());