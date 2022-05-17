//Constants definition:

const contractsLimit = 3;

//Variable definition:

let baseFare;
let kilometersFactor;

let titleMessage = "CALCULADORA DE TARIFAS RENT A CAR";

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

//MAIN CODE:

let numberOfContracts = prompt(titleMessage + "\n\n" + contractsMessage);

while (
	isNaN(numberOfContracts) ||
	numberOfContracts == "" ||
	numberOfContracts < 1 ||
	numberOfContracts > contractsLimit
) {
	if (
		isNaN(numberOfContracts) ||
		numberOfContracts == "" ||
		numberOfContracts < 1
	) {
		numberOfContracts = prompt(
			titleMessage + "\n\n" + contractsInvalidInput + "\n" + contractsMessage
		);
	} else {
		alert(titleMessage + "\n\n" + exceededMessage);
		numberOfContracts = 0;
		break;
	}
}

let serviceBill = "Vehículo\t\tKilómetros\t\tRecargo\t\tValor total (USD)\n\n";
console.log(serviceBill);

let totalBill = 0;

for (let i = 0; i < numberOfContracts; i++) {
	let vehicleKind = prompt(titleMessage + "\n\n" + optionsMessage);

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

	let kilometers = prompt(titleMessage + "\n\n" + distanceMessage);

	while (isNaN(kilometers) || kilometers == "" || kilometers < 0) {
		kilometers = prompt(distanceErrorMessage + "\n\n" + distanceMessage);
	}

	serviceBill = serviceBill + kilometers + "\t\t\t\t";

	let pickUp = confirm("¿El cliente solicitó la recogida del vehículo?");

	let rentCost = baseFare + parseInt(kilometers) * kilometersFactor;

	if (pickUp) {
		serviceBill = serviceBill + "Si" + "\t\t\t";
		rentCost += 25;
	} else {
		serviceBill = serviceBill + "No" + "\t\t\t";
	}

	serviceBill = serviceBill + rentCost + "\n";

	totalBill += rentCost;

	console.log(serviceBill);
}

console.log("\nVALOR TOTAL DE LA FACTURA\t\t\t\t\t" + totalBill);