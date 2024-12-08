let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal) {
  if (currentSize >= max) {
    alert("Stack is full you can not add" + newVal);
  }
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(30);
push(10);
push(2);
pop();
pop();
pop();
push(25);
push(23);
push(67);
// pop()
// pop()

console.warn(data);














// stack with the help of class
// class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     // Add an element to the stack
//     push(element) {
//       this.items.push(element);
//     }
  
//     // Remove the top element from the stack
//     pop() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.items.pop();
//     }
  
//     // View the top element
//     peek() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.items[this.items.length - 1];
//     }
  
//     // Check if the stack is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     // Get the size of the stack
//     size() {
//       return this.items.length;
//     }
  
//     // Clear the stack
//     clear() {
//       this.items = [];
//     }
//   }
  
//   // Example usage
//   const stack = new Stack();
//   stack.push(10);
//   stack.push(20);
//   stack.push(30);
//   console.log(stack.peek()); // 30
//   console.log(stack.pop());  // 30
//   console.log(stack.size()); // 2
  