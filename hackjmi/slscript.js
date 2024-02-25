document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const table = document.getElementById('table');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const hours = parseFloat(document.getElementById('hours').value);

    if (!date || !hours) {
      alert('Please fill in all fields.');
      return;
    }

    // create a new table row
    const newRow = document.createElement('tr');
    newRow.style.backgroundColor="black";
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${date}</td>
        <td>${hours}</td>
        <td>${getSleepRemark(hours)}</td>
        <td><img src="delete.webp" class="deleteimg" width="30" height="30"></td>
      `;

    // append the new row to the table
    table.appendChild(newRow);

    // reset form fields
    form.reset();
  });

  // event listener for deleting rows
  table.addEventListener('click', function (event) {
    if (event.target && event.target.tagName === 'IMG' && event.target.src.includes('delete.webp')) {
      // call deleteItem function
      deleteItem(event);
    }
  });

  function deleteItem(event) {
    // get the row that contains the delete image clicked
    let row = event.target.closest('tr');
    row.remove();
  }

  function getSleepRemark(hours) {
    if (hours >= 7) {
      return 'Good sleep!';
    } else if (hours >= 5 && hours < 7) {
      return 'Average sleep.';
    } else {
      return 'Insufficient sleep!';
    }
  }
});
