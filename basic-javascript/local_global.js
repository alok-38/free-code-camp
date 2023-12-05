const readline = require('readline');

// Global variable
let globalResult = 0;

// Function that uses both local and global variables
function performCalculation(input) {
  // Local variable
  let localValue = 5;

  // Perform a complex calculation using both local and global variables
  let result = input * localValue + globalResult;

  // Update the global variable
  globalResult = result;

  // Return the result
  return result;
}

// Interactive part using readline
function interactiveFunction() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt the user for input
  rl.question('Enter a number (type "exit" to end): ', (userInput) => {
    // Check if the user wants to exit
    if (userInput.toLowerCase() === 'exit') {
      // Close the readline interface and end the program
      rl.close();
    } else {
      // Parse the input as a float
      userInput = parseFloat(userInput);

      // Check if the input is a valid number
      if (!isNaN(userInput)) {
        // Call the function and display the result
        let calculationResult = performCalculation(userInput);
        console.log("Result of the complex calculation:", calculationResult);

        // Display the updated global variable
        console.log("Updated global result:", globalResult);
      } else {
        console.log("Invalid input. Please enter a number or type 'exit' to end.");
      }

      // Close the readline interface
      rl.close();

      // Continue with the interactive program
      interactiveFunction();
    }
  });
}

// Run the interactive program
interactiveFunction();
