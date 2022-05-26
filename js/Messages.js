// CONSTANTS:
// Limit of contracts per bill:
const contractsLimit = 3;
// Limit of attempts per log in:
const attemptLimit = 3;

// MESSAGES:

// GENERAL INPUT ERRORS:

// Invalid input:
let invalidInput = "Entrada inválida!\n\n";
// Empty input:
let emptyInput = "Entrada vacía!\n\n";

// SIGN IN:

// UserID request:
let userIDRequest = "Escribe tu número de documento para ingresar: ";
// User not found:
let userNotFound = "El usuario que buscas no está registrado.";

// User password request:
let passwordRequest = "Ingresa tu contraseña: ";
// Incorrect password:
let incorrectPassword = "Contraseña incorrecta. Intentos restantes: ";
// Password attempts exceeded:
let passwordAttemptsExceeded =
	"Has excedido el número de intentos. Contacta con el administrador para asignar una nueva contraseña.";

// COMPANY INFORMATION:

let titleMessage = "CALCULADORA DE TARIFAS RENT A CAR\n\n";
let billHeaderMessage = "RENT-A-CAR\n" + "NIT 830.141.901-7\n\n";

// Number of contracts messages

let contractsMessage =
	"Por favor ingresa el número de contratos para esta facturación, debe ser un número entre 1 y " +
	contractsLimit;

// CONTRACTS:
let discardContract = "El contrato ha sido descartado.";

// Kind of car selection messages
let optionsMessage =
	"Escribe el dígito que corresponda a la solicitud de alquiler:\n" +
	"\t1. Motocicleta\n" +
	"\t2. Automóvil\n" +
	"\t3. Camioneta\n" +
	"\t4. Furgón\n" +
	"\t5. Camión";

// Kilometers request messages
let distanceMessage =
	"Ingresa el número de kilómetros recorridos con el vehículo: ";

// Pick up confirmation message:

let pickUpMessage = "¿El cliente solicitó la recogida del vehículo?";

//

let confirmationMessage =
	"Por favor confirma la información de este contrato para cargarlo a la factura.\n\n";

// Keep using Rent-a-car calculator:
let stayMessage = "¿Deseas acceder nuevamente a la calculadora de rentas?";

// End message:
let endMessage =
	"Gracias por utilizar la calculadora de tarifas Rent-a-car ¡Que tengas un excelente día!";
