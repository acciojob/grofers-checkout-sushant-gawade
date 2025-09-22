// Create the button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const priceElements = document.querySelectorAll(".price");
  
  let total = 0;
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent);
  });

  // Prevent adding multiple total rows if button is clicked again
  const oldTotalRow = document.getElementById("totalRow");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // Create new row for total
  const table = document.getElementById("groceryTable");
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // spans across the table
  totalCell.textContent = "Total Price: Rs " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Attach event listener
getSumBtn.addEventListener("click", getSum);
