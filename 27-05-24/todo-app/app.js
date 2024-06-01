const addButtonElement = document.querySelector(".add--button");
const inputElement = document.querySelector("input");
const olElement = document.querySelector("ol");

// Event handler
addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  // Get the input value
  const acceptInput = inputElement.value.trim();

  // Only add the new item if the input is not empty
  if (acceptInput !== "") {
    // Create a new li
    const newListItem = document.createElement("li");

    // Create a new delete button
    const newDeleteButton = document.createElement("button");
    newDeleteButton.textContent = "×";
    newDeleteButton.setAttribute("aria-label", `Complete task: ${acceptInput}`);
    newDeleteButton.addEventListener("click", () => {
      newListItem.remove();
    });

    // Append the delete button to the li
    newListItem.appendChild(newDeleteButton);

    // Create and append the text node to the li
    const newTextContent = document.createTextNode(acceptInput);
    newListItem.appendChild(newTextContent);

    // Append the li to the ol
    olElement.appendChild(newListItem);

    // Clear the input field
    inputElement.value = "";
  }
});

// Event delegation for handling delete button clicks
olElement.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.closest("li").remove();
  }
});
