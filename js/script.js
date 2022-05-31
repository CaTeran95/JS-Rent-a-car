//Header printing function:

function header(agent) {
	console.log(billHeaderMessage);
	console.log("Elaborado por: " + agent.name + "\n");
	console.log("Documento: " + agent.id + "\n\n");
}

//ID string to ID number:

function stringToNumber(string) {
	let filteredString = string.match(/\d/g);
	filteredString = filteredString.join("");
}

//Alert contract confirmation message function:

function confirmContract(contract) {
	let contractSummary = `Número de contrato:           ${contract.contractNumber}\n`;
	contractSummary += `Tipo de vehículo:                  ${contract.vehicleKind[1]}\n`;
	contractSummary += `Distancia recorrida (km):      ${contract.distance} \n`;
	contractSummary += `Servicio de recogida:            `;
	if (contract.pickUp) {
		contractSummary += "Si\n";
	} else {
		contractSummary += "No\n";
	}
	contractSummary += `Costo del alquiler (USD):      ${roundNumber(
		contract.cost,
		3
	)}`;

	return confirm(titleMessage + confirmationMessage + contractSummary);
}

function contractBillLine(contract) {
	let line = "";
	switch (contract.vehicleKind[0]) {
		case 1:
			line += "Motocicleta\t\t";
			break;
		case 2:
			line += "Automóvil\t\t";
			break;
		case 3:
			line += "Camioneta\t\t";
			break;
		case 4:
			line += "Furgón\t\t\t";
			break;
		case 5:
			line += "Camión\t\t\t";
			break;
	}
	line += contract.distance + "\t\t\t\t";
	if (contract.pickUp) {
		line += "Si" + "\t\t\t";
	} else {
		line += "No" + "\t\t\t";
	}
	line += contract.cost + "\n";
	return line;
}

function yesNo (statement) {
	if(statement) { 
		return "Si";
	} else { 
		return "No"; 
	}
}

//MAIN CODE:

let bill = new Array;

function newContract() {
	
	// Getting information from the form:
	let kindOfVehicle = document.querySelector("#kindOfCarOptions").value;
	let distance = document.querySelector("#distance").value;
	let pickUpCheckBox = document.querySelector("#pickUp");
	
	// Pick up validation:
	let pickUp = false;
	if(pickUpCheckBox.checked){
		pickUp = true;
	}
	
	// Form reset:
	document.querySelector("form").reset();
	
	// New object Contract with the provided input:
	let serviceContract = new Contract(kindOfVehicle, distance, pickUp);
	
	// Creating the bill for this session:
	bill.push(serviceContract);

	console.log(serviceContract);

	// Appending the table entry:
	let table = document.querySelector("table");
	let contractLine = document.createElement("tr");
	contractLine.innerHTML = 
		`<td>${serviceContract.vehicleKind[1]}</td>
		<td>${serviceContract.distance}</td>
		<td>${yesNo(serviceContract.pickUp)}</td>
		<td>${serviceContract.cost}</td>`;
	table.appendChild(contractLine);
}
