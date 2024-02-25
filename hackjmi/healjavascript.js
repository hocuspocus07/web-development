document.addEventListener('DOMContentLoaded', function () {
    let sno = 0;
    const form = document.querySelector('form');
    function add() {
        let date = document.getElementById('date').value;
        let waterIntake = document.getElementById('waterIntake').value;
        let exerciseDuration = document.getElementById('exerciseDuration').value;
        let bsLevel = document.getElementById('bsLevel').value;
        if (!date || !waterIntake || !exerciseDuration || !bsLevel) {
            alert('Please fill in all fields.');
            return;
        }
        let deleteimg = document.createElement('img');
        deleteimg.classList.add('deleteimg');
        deleteimg.src = "delete.webp";
        deleteimg.width = 30;
        deleteimg.height = 30;
        let table = document.getElementById('table');
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        cell1.innerHTML = sno + 1;
        cell2.innerHTML = date;
        cell3.innerHTML = waterIntake;
        cell4.innerHTML = exerciseDuration;
        cell5.innerHTML = bsLevel;
        cell6.appendChild(deleteimg);
        sno++;
        form.reset();
    }
    document.getElementById('submit').addEventListener('click', add);
    table.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'IMG' && event.target.src.includes('delete.webp')) {
            deleteItem(event);
        }
    });

    function deleteItem(event) {
        let row = event.target.closest('tr');
        row.remove();
    }
    const logo = document.getElementById('logo');
    const text = "HEALTH TRACKER";
    let index = 0;
    let isDeleting = false;

    function type() {
        const currentText = text.substring(0, index);

        logo.innerHTML = currentText + '<span class="cursor">|</span>';

        if (!isDeleting && index === text.length) {
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
        }

        index += isDeleting ? -1 : 1;

        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();

});
