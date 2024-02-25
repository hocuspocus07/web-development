let sno = 0;
document.addEventListener("DOMContentLoaded", function () {
    let balanceAmt = document.getElementById('balanceAmt');
    let totalExpense = document.getElementById('totalExpense');
    let totalIncome = document.getElementById('totalIncome');
    totalExpense.innerText = 0;
    totalIncome.innerText = 0;
    balanceAmt.innerText = 0;
});

function add() {
    let sign;
    let expenseName = document.getElementById('expenseName').value;
    let amt = parseFloat(document.getElementById('amt').value); 
    let type = document.getElementById('type').value;
    let balanceAmt = document.getElementById('balanceAmt');
    let totalExpense = document.getElementById('totalExpense');
    let totalIncome = document.getElementById('totalIncome');

    // Check if expense name is empty
    if (!expenseName.trim()) { 
        alert("Please enter an expense/income name");
        return; 
    }

    // Check if amt is negative or not a number
    if (isNaN(amt) || amt < 0) {
        alert("Please enter a valid amount");
        return; 
    }

    if (type === "Expense") {
        sign = "downarrow.png";
        totalExpense.innerText = parseFloat(totalExpense.innerText) + amt; // update totalExpense with amt directly
        balanceAmt.innerText = parseFloat(balanceAmt.innerText) - amt;
    } else if (type === "Income") {
        sign = "uparrow.jpg";
        totalIncome.innerText = parseFloat(totalIncome.innerText) + amt; // update totalIncome with amt directly
        balanceAmt.innerText = parseFloat(balanceAmt.innerText) + amt;
    }

    let signimage = document.createElement('img');
    let deleteimg=document.createElement('img');
    deleteimg.classList.add('deleteimg');
    deleteimg.src="delete.webp";
    deleteimg.width=30;
    deleteimg.height=30;
    signimage.src = sign;
    signimage.width = 20;
    signimage.height = 20;

    let table = document.getElementById('table');
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5=newRow.insertCell(4);

    cell1.innerHTML = sno + 1;
    cell2.innerHTML = expenseName;
    cell3.innerHTML = amt;
    cell4.appendChild(signimage);
    cell5.appendChild(deleteimg);

    sno++;
}

function deleteItem(event) {
    // Get the row that contains the delete image clicked
    let row = event.target.closest('tr');
    let typeImgSrc = row.cells[3].querySelector('img').src;
    let type = typeImgSrc.includes('downarrow.png') ? "Expense" : "Income";
    // Remove the row from the table
    let amt = parseFloat(row.cells[2].innerText);
    row.remove();
    let balanceAmt = document.getElementById('balanceAmt');
    let totalExpense = document.getElementById('totalExpense');
    let totalIncome = document.getElementById('totalIncome');
    if (type === "Expense") {
        balanceAmt.innerText = parseFloat(balanceAmt.innerText) + amt;
        totalExpense.innerText = parseFloat(totalExpense.innerText) - amt;
    }else if (type === "Income") {
        balanceAmt.innerText = parseFloat(balanceAmt.innerText) - amt;
        totalIncome.innerText = parseFloat(totalIncome.innerText) - amt;
    }
}

// Attach event listener to the document for delegated event handling
document.addEventListener('click', function(event) {
    // Check if the clicked element is a delete image
    if (event.target && event.target.tagName === 'IMG' && event.target.src.includes('delete.webp')) {
        // Call deleteItem function
        deleteItem(event);
    }
});


