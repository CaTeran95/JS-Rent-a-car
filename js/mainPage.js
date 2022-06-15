let userMenu = document.querySelector("#userName");

let userName = sessionStorage.getItem("user");

userMenu.innerText = `${userName}`;

let staffTable = document.querySelector(".personnel table");

function formattedID(id) { return id.toLocaleString('en-US'); }

function rechargeTable() {
    staffTable.innerHTML = `
    <tr id="tableHeader">
        <th id="Sel">Sel</th>
        <th id="Name">Nombre</th>
        <th id="ID">ID</th>
        <th id="Role">Rol</th>        
        <th id="State">Estado</th>
    </tr>`;
	for (const {name, id, role, state} of staff) {
		let newEmployee = document.createElement("tr");
		newEmployee.id = id;
		newEmployee.innerHTML = `
            <td class="centered"><input type="checkbox" name="" id="${id}"></td>
            <td>${name}</td>
            <td class="left-aligned">${formattedID(id)}</td>
            <td class="centered">${role}</td>
            <td class="centered">${state}</td>`;
		staffTable.appendChild(newEmployee);
	}
}

function seekDeleteID(seek, source) {
    for (let index = 0; index < source.length; index++) {
        if (source[index].id == seek) {
            source.splice(index, 1);
        }
    }
}

function deleteSelected() {
	let selectedElements = document.querySelectorAll("input:checked");
    let message = `
        <p>¿Deseas eliminar los siguientes usuarios?</p>
        <ul>`;
    for (const element of selectedElements) {
        message += `<li>${staff.find((employee) => employee.id == element.id).name}</li>`;
    }
    message += `</ul>`;
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        html: message,
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText:
          'Eliminar',
        cancelButtonText:
          'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            for (const element of selectedElements) {
                seekDeleteID(element.id, staff);
            }
            rechargeTable();
            localStorage.setItem("staff", JSON.stringify(staff));
            Swal.fire('¡Usuarios eliminados!', '', 'success') 
        }
    })
}

	

rechargeTable();

let personnelSection = document.querySelector(".personnel");
let contractsSection = document.querySelector(".contracts");

let personnelButton = document.querySelector("#Personnel");
let contractsButton = document.querySelector("#Contracts");

personnelButton.addEventListener("click", function () {
    personnelSection.style.display = "flex";
    contractsSection.style.display = "none";
})

contractsButton.addEventListener("click", function () {
    personnelSection.style.display = "none";
    contractsSection.style.display = "flex";
})