// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.items = [];
  }

  peek() {
    // Write your code here.
    return this.items[this.items.length - 1];
  }

  pop() {
    // Write your code here.
    return this.items.pop();
  }

  push(number) {
    // Write your code here.
    this.items.push(number);
  }

  getMin() {
    // Write your code here.
    const minValue = Math.min(...this.items);
    return minValue;
  }

  getMax() {
    // Write your code here.
    const minValue = Math.max(...this.items);
    return minValue;
  }
}
