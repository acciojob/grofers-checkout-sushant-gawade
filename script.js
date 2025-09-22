// Select all price cells
const priceCells = document.querySelectorAll('.price');

let total = 0;

// Loop through each price cell and sum up the values
priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
});

// Select the table
const table = document.getElementById('groceryTable');

// Create a new row for the total
const totalRow = document.createElement('tr');

// Create a single cell for the total price
const totalCell = document.createElement('td');
totalCell.colSpan = 2; // Span across both columns
totalCell.style.textAlign = 'right';
totalCell.style.fontWeight = 'bold';
totalCell.textContent = `Total: Rs ${total}`;

// Append the cell to the row, and row to the table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
