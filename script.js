// Create button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove old total row if already exists (avoid duplicates)
  const oldTotal = document.querySelector(".total-row");
  if (oldTotal) {
    oldTotal.remove();
  }

  // Select all price cells
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  // Sum up all prices
  priceCells.forEach(cell => {
    total += parseInt(cell.textContent, 10);
  });

  // Create new row for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.classList.add("total-row");

  const newCell = document.createElement("td");
  newCell.id = "ans";
  newCell.setAttribute("colspan", "2");
  newCell.style.fontWeight = "bold";
  newCell.textContent = "Total Price: Rs " + total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

// Event listener for button
getSumBtn.addEventListener("click", getSum);