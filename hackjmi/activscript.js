let sno = 0;
function add(event) {
  event.preventDefault(); // Prevent form submission

  let activity = document.querySelector('#activity').value;
  let duration = document.querySelector('#duration').value;
  let deleteimg = document.createElement('img');
  deleteimg.classList.add('deleteimg');
  deleteimg.src = "delete.webp";
  deleteimg.width = 30;
  deleteimg.height = 30;

  // Check if either activity or duration is empty
  if (!activity.trim() || !duration.trim()) {
    alert("Please fill in both fields.");
    return; // Stop execution if fields are empty
  }

  let table = document.getElementById('table');
  let newRow = table.insertRow(-1);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  cell1.innerHTML = sno + 1;
  cell2.innerHTML = activity;
  cell3.innerHTML = duration;
  cell4.appendChild(deleteimg);
  sno++;
}
table.addEventListener('click', function (event) {
  if (event.target && event.target.tagName === 'IMG' && event.target.src.includes('delete.webp')) {
    // Call deleteItem function
    deleteItem(event);
  }
});

function deleteItem(event) {
  // Get the row that contains the delete image clicked
  let row = event.target.closest('tr');
  row.remove();
}

