const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function arrayClosure() {
  let arr = [];
  function getArray() {
    return arr;
  }

  function insert(value) {
    arr.push(value);
  }

  function deleteLast() {
    return arr.pop();
  }

  return { getArray, insert, deleteLast };
}
const arrayMethods = arrayClosure();

function askQuestion() {
  rl.question(
    "\n\n1: Insert new element to existing array\n2: Delete from end\n\n\nEnter choice :: ",
    (input1) => {
      switch (input1) {
        case "1":
          rl.question("Enter value to insert: ", (val) => {
            arrayMethods.insert(val); // insert value
            console.log("Array now:", arrayMethods.getArray());
            askQuestion(); // loop again
          });
          break;
        case "2": {
          const deletedItem = arrayMethods.deleteLast();
          askQuestion(); // loop again
          console.log("Deleted item ---", deletedItem);
        }
        default:
          console.log("Wrong input: Exiting loop");
          rl.close(); // exit the loop
          break;
      }
    }
  );
}

// Start the loop
askQuestion();
