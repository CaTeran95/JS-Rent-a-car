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

//MAIN CODE:

let useCalculator = true;

do {
	let agent = signIn();
	if (agent) {
		header(agent);
		let bill = [];
		let numberOfContracts = validateNaturalInput(
			contractsMessage,
			contractsLimit
		);
		let serviceBill =
			"Vehículo\t\tKilómetros\t\tRecargo\t\tValor total (USD)\n\n";
		console.log(serviceBill);
		let contractCounter = 0;
		while (contractCounter < numberOfContracts) {
			let vehicleKindCode = validateNaturalInput(optionsMessage, 5);
			let distance = validateFloatInput(distanceMessage);
			let pickUp = confirm(titleMessage + pickUpMessage);
			let serviceContract = new Contract(vehicleKindCode, distance, pickUp);
			if (confirmContract(serviceContract)) {
				bill.push(serviceContract);
				console.log(contractBillLine(serviceContract));
				contractCounter++;
			} else {
				alert(titleMessage + discardContract);
				contracts--;
			}
		}
		let totalBill = 0;
		for (const contract of bill) {
			totalBill += contract.cost;
		}
		console.log(
			"\nVALOR TOTAL DE LA FACTURA\t\t\t\t\t" + roundNumber(totalBill, 2)
		);
		useCalculator = false;
	} else {
		useCalculator = confirm(stayMessage);
	}
} while (useCalculator);

alert(endMessage);
