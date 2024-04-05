const generateTable = (numRows, numCols) => {
    // creates a <table> element and a <tbody> element
    const tableElement = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Creating all cells
    for (let i = 0; i < numRows; i++) {
        // Creates a table row
        const tableRow = document.createElement('tr');

        for (let j = 0; j < numCols; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const tableCell = document.createElement('td');
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
            tableCell.appendChild(cellText); // Corrected line
            tableRow.appendChild(tableCell);
        }

        // add the row to the end of the table body
        tableBody.appendChild(tableRow);
    }

    // Put the table body in the table
    tableElement.appendChild(tableBody);
    // appends <table> into <body>
    document.body.appendChild(tableElement);
}

const inputElement = document.querySelector('input');

inputElement.addEventListener('click', () => {
    // Prompt the user to input the number of rows and columns
    const numRows = parseInt(prompt("Enter the number of rows:"));
    const numCols = parseInt(prompt("Enter the number of columns:"));
    
    // Generate the table dynamically
    generateTable(numRows, numCols);
});
