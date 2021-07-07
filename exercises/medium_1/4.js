/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: list of commands and values to perform operations on

    - Output(s):
      - string: any print commands

    - Rules + Questions:
      - Operations described in problem description.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  Shown in problem
  - Output(s):

- Data Structure:
  - Values to perform operations are stored in an array
  - Register value is a number

- Algorithm:
  1. Split string into elements using ' ' delimiter
  2. If element is a number, set register equal to number, remove (pop) element
  3. If element is a command, execute command, remove (pop) element
  4. Repeat until array is empty

- Code:
*/

let minilang = commandString => {
  let commandArray = commandString.split(' ');
  let register = 0;
  let stack = [];
  let error = '';

  commandArray.forEach(element => {
    if (Number.isInteger(+element)) {
      register = +element;
    } else {
      switch (element) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.round(register / stack.pop());
          break;
        case 'REMAINDER':
          register = Math.round(register % stack.pop());
          break;
        case 'POP':
          if (stack.length === 0) {
            error += 'Stack is empty. ';
          }
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
        default:
          error += `${element} is an invalid command. `;
      }
    }
  });

  console.log(error);
  return error || undefined;
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT POP TEST POP POP');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)