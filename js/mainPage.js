let userMenu = document.querySelector("#userName");

let userName = sessionStorage.getItem("user");

userMenu.innerText = `${userName}`;

let staffTable = document.querySelector(".personnel table");

function rechargeTable() {
    staffTable.innerHTML = `
    <tr id="tableHeader">
        <th id="Sel">Sel</th>
        <th id="Name">Nombre</th>
        <th id="ID">ID</th>
        <th id="Role">Rol</th>        
        <th id="State">Estado</th>
    </tr>`;
	for (const employee of staff) {
		let newEmployee = document.createElement("tr");
		newEmployee.id = employee.id;
		newEmployee.innerHTML = `
            <td class="centered"><input type="checkbox" name="" id="${employee.id}"></td>
            <td>${employee.name}</td>
            <td class="left-aligned">${employee.id}</td>
            <td class="centered">${employee.role}</td>
            <td class="centered">${employee.state}</td>`;
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
	for (const element of selectedElements) {
        seekDeleteID(element.id, staff);
    }
    rechargeTable();
    localStorage.setItem("staff", JSON.stringify(staff));
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