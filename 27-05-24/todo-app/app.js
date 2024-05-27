// Select all buttons inside the todo list
const todoListbuttons = document.querySelectorAll("#todo-list button");

// Loop through the NodeList and add event listeners or manipulate buttons
todoListbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Add your event handler logic here
    console.log("Button clicked");
  });
});

const addButtonElement = document.querySelector(".add--button");

// Select the input element
const inputElement = document.querySelector("input");
const olElement = document.querySelector("ol");

// Event handler
addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  //   Create a new li
  const newListItem = document.createElement("li");
  //   Create a new button
  const newDeleteButton = document.createElement("button");
  // append the delete button with 'x'
  newDeleteButton.textContent = "x";
  //   Append the new button to the ol
  newListItem.appendChild(newDeleteButton);
  const acceptInput = inputElement.value;
  //   Set text node
  const newTextContent = document.createTextNode(acceptInput);
  //   Append this text node to li
  newListItem.appendChild(newTextContent);
  //   Append the li to ol
  olElement.appendChild(newListItem);
  inputElement.value = "";
});
