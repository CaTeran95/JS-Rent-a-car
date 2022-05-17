//Agents names:

const agent1 = "Carlos";
const agent2 = "Camilo";
const agent3 = "Alicia";

//Constants definition:

const contractsLimit = 3;

//MESSAGES:

//Company messages:

let titleMessage = "CALCULADORA DE TARIFAS RENT A CAR\n\n";
let billHeaderMessage = "RENT-A-CAR\n" + "NIT 830.141.901-7\n\n";

//Number of contracts messages

let contractsMessage =
	"Por favor ingresa el número de contratos para esta facturación: ";
let contractsInvalidInput =
	"ENTRADA INVÁLIDA. Escribe un número de contratos entre 1 y " +
	contractsLimit;
let exceededMessage =
	"La facturación simultánea de más de " +
	(contractsLimit + 1) +
	" contratos debe realizarse directamente en ventanilla.";

//Kind of car selection messages

let optionsMessage =
	"Escribe el dígito que corresponda a la solicitud de alquiler:\n" +
	"\t1. Motocicleta\n" +
	"\t2. Automóvil\n" +
	"\t3. Camioneta\n" +
	"\t4. Furgón\n" +
	"\t5. Camión";
let errorOptionsMessage =
	"ENTRADA INVÁLIDA, por favor escribe uno de los dígitos proporcionados.";

//Kilometers request messages

let distanceMessage =
	"Ingresa el número de kilómetros recorridos con el vehículo: ";
let distanceErrorMessage =
	"ENTRADA INVÁLIDA, por favor escribe un número, que además sea mayor que cero.";

// 

let confirmationMessage = "Por favor confirma la información de este contrato para cargarlo a la factura.\n\n"

//Header printing function:

function header(agent) {
	console.log(billHeaderMessage);
	console.log("Elaborado por: " + agent + "\n\n");
}

//Agent name capture function:

function validName() {
	let invalid = true;
	do {
		let name = prompt(titleMessage + "Ingresa tu nombre: ").toLowerCase();
		switch (name) {
			case agent1.toLowerCase():
				alert(titleMessage + "Bienvenido " + agent1 + "!");
				invalid = false;
				return agent1;
			case agent2.toLowerCase():
				alert(titleMessage + "Bienvenido " + agent2 + "!");
				invalid = false;
				return agent2;
			case agent3.toLowerCase():
				alert(titleMessage + "Bienvenida " + agent3 + "!");
				invalid = false;
				return agent3;
			default:
				alert(
					"El nombre proporcionado no está registrado! Por favor ingresa un nombre válido."
				);
		}
	} while (invalid);
}

//Alert contract confirmation message function:

function confirmContract(vehicleCode, distance, pickUpService, totalAmount) {
	let contractSummary = "Tipo de vehículo:                  ";
	switch (parseInt(vehicleCode)) {
		case 1:
			contractSummary += "Motocicleta\n";
			break;
		case 2:
			contractSummary += "Automóvil\n";
			break;
		case 3:
			contractSummary += "Camioneta\n";
			break;
		case 4:
			contractSummary += "Furgón\n";
			break;
		case 5:
			contractSummary += "Camión\n";
			break;
	} 
	contractSummary += "Distancia recorrida (km):      " + distance + "\n";
	contractSummary += "Servicio de recogida:            "
	if (pickUpService) {
		contractSummary += "Si\n";
	} else {
		contractSummary += "No\n";
	}
	contractSummary += "Costo del alquiler (USD):      " + totalAmount;

	return confirm(titleMessage + confirmationMessage + contractSummary);
}

//Round function:

function roundNumber(number, decimals){
    let power = 1;
    for (let i = 0; i < decimals; i++) {
        power *= 10;
    }
    number *= power;
    number = parseInt(number);
    return number = number / power;
}

//Variable definition:

let baseFare;
let kilometersFactor;

//MAIN CODE:

let agent = validName();
header(agent);

let numberOfContracts = prompt(titleMessage + contractsMessage);

while (
	isNaN(numberOfContracts) ||
	numberOfContracts < 1 ||
	numberOfContracts > contractsLimit
) {
	if (
		isNaN(numberOfContracts) ||
		numberOfContracts < 1
	) {
		numberOfContracts = prompt(
			titleMessage + contractsInvalidInput + "\n" + contractsMessage
		);
	} else {
		alert(titleMessage + exceededMessage);
		numberOfContracts = 0;
		break;
	}
}

let serviceBill = "Vehículo\t\tKilómetros\t\tRecargo\t\tValor total (USD)\n\n";
console.log(serviceBill);

let totalBill = 0;

let contractCounter = 0;

while (contractCounter < numberOfContracts) {
	let vehicleKind = prompt(titleMessage + optionsMessage);

	while (
		isNaN(vehicleKind) ||
		vehicleKind == "" ||
		vehicleKind < 1 ||
		vehicleKind > 5
	) {
		vehicleKind = prompt(errorOptionsMessage + "\n\n" + optionsMessage);
	}

	switch (parseInt(vehicleKind)) {
		case 1:
			serviceBill = "Motocicleta\t\t";
			baseFare = 10;
			kilometersFactor = 0.5;
			break;
		case 2:
			serviceBill = "Automóvil\t\t";
			baseFare = 30;
			kilometersFactor = 1.2;
			break;
		case 3:
			serviceBill = "Camioneta\t\t";
			baseFare = 45;
			kilometersFactor = 1.35;
			break;
		case 4:
			serviceBill = "Furgón\t\t\t";
			baseFare = 80;
			kilometersFactor = 1;
			break;
		case 5:
			serviceBill = "Camión\t\t\t";
			baseFare = 120;
			kilometersFactor = 1;
			break;
	}

	let kilometers = prompt(titleMessage + distanceMessage);

	while (isNaN(kilometers) || kilometers == "" || kilometers < 0) {
		kilometers = prompt(distanceErrorMessage + "\n\n" + distanceMessage);
	}

	kilometers = roundNumber(kilometers, 2);

	serviceBill = serviceBill + kilometers + "\t\t\t\t";

	let pickUp = confirm(titleMessage + "¿El cliente solicitó la recogida del vehículo?");

	let rentCost = baseFare + parseInt(kilometers) * kilometersFactor;

	if (pickUp) {
		serviceBill = serviceBill + "Si" + "\t\t\t";
		rentCost += 25;
	} else {
		serviceBill = serviceBill + "No" + "\t\t\t";
	}

	rentCost = roundNumber(rentCost, 2);
	serviceBill = serviceBill + rentCost + "\n";

	let checkInfo = confirmContract(vehicleKind, kilometers, pickUp, rentCost);

	if (checkInfo) {
		totalBill += rentCost;
		console.log(serviceBill);
		contractCounter++;
	}
	
}

console.log("\nVALOR TOTAL DE LA FACTURA\t\t\t\t\t" + totalBill);