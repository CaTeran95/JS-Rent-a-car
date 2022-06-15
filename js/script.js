//ID string to ID number:

function stringToNumber(string) {
	let filteredString = string.match(/\d/g);
	filteredString = filteredString.join("");
}

// 

function yesNo(statement) {
	return statement ? "Si" : "No";
}

function newContract() {
	// Getting information from the form:
	let kindOfVehicle = document.querySelector("#kindOfVehicle").value;
	let distance = document.querySelector("#distance").value;
	let pickUpCheckBox = document.querySelector("#pickUp");

	// Pick up validation:
	let pickUp = false;
	pickUpCheckBox.checked && (pickUp = true);

	// Form reset:
	document.querySelector("#form").reset();

	// New object Contract with the provided input:
	let serviceContract = new Contract(
		kindOfVehicle,
		roundNumber(distance, 2),
		pickUp
	);

	// Creating the bill for this session:
	bill.push(serviceContract);

	// Appending the table entry:
	let table = document.querySelector("#contractTable");
	let contractLine = document.createElement("tr");
	let totalLine = document.querySelector("#totalBill");

	contractLine.innerHTML = `<td>${serviceContract.vehicleKind[1]}</td>
		<td class = "centered">${serviceContract.distance}</td>
		<td class = "centered">${yesNo(serviceContract.pickUp)}</td>
		<td class = "rightAlign">${serviceContract.cost}</td>`;
	table.appendChild(contractLine);

	totalLine.innerHTML = ``;
	
	Toastify({
		text: "¡Contrato agregado con éxito!",
		duration: 3000,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "right", // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		className: "emergentToast",
		offset: {
			x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
			y: '10vh' // vertical axis - can be a number or a string indicating unity. eg: '2em'
		}
	}).showToast();
}

function contractSum() {
	let table = document.querySelector("#contractTable");
	let totalLine = document.querySelector("#totalBill");
	totalLine.remove();
	
	totalLine = document.createElement("tr");
	totalLine.id = "totalBill";

	let totalBill = 0;

	for (const contract of bill) {
		totalBill += contract.cost;
	}
	
	totalLine.innerHTML = `<td colspan = "3"> <strong>Valor acumulado de los contratos:</strong> </td>
	<td class = "rightAlign"> ${roundNumber(totalBill, 2)}`;

	table.appendChild(totalLine);
} 

function clearBill() {
	bill = [];
	let table = document.querySelector("#contractTable");
	table.innerHTML = 
		`<tr>
			<th>Vehículo</th>
			<th>Distancia, km</th>
			<th>Recogida</th>
			<th>Precio, USD</th>
		</tr>
		<tr id="totalBill">

		</tr>`;

	Swal.fire({
		icon: 'error',
		title: 'Contratos eliminados',
		text: 'La factura de contratos está vacía'
		})
}

//MAIN CODE:

let bill = new Array();


let totalContract = document.querySelector("#contractSum");
totalContract.addEventListener("click", contractSum);

let clearTable = document.querySelector("#clearBill");
clearTable.addEventListener("click", clearBill);
