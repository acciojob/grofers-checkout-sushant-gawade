// Select all price cells
const priceCells = document.querySelectorAll('.price');

let total = 0;

// Sum up the prices
priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
});

// Select the table
const table = document.getElementById('groceryTable');

// Create a new row
const totalRow = document.createElement('tr');

// First cell (Item column) – leave empty
const emptyCell = document.createElement('td');
emptyCell.textContent = "Total";
emptyCell.style.fontWeight = 'bold';

// Second cell (Price column) – show total
const totalCell = document.createElement('td');
totalCell.textContent = total;
totalCell.style.fontWeight = 'bold';

// Append cells to the row
totalRow.appendChild(emptyCell);
totalRow.appendChild(totalCell);

// Append the row to the table
table.appendChild(totalRow);
