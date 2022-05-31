// REVISAR LA ENTRADA DE DATOS DIRECTAMENTE EN EL SETTER DE LA CLASE!!!
let contracts = 1;

class Contract {
	constructor(vehicleKindCode, distance, pickUp) {
		this.setContractNumber();
		this.setVehicleKind(vehicleKindCode);
		this.distance = distance;
		this.pickUp = pickUp;
		this.setCost();
	}

	setContractNumber() {
		this.contractNumber = contracts;
		contracts++;
	}

	setVehicleKind(selectionCode) {
		switch (selectionCode) {
			case "Motocicleta":
				this.vehicleKind = [1, "Motocicleta", 10, 0.5];
				break;
			case "Automóvil":
				this.vehicleKind = [2, "Automóvil", 30, 1.2];
				break;
			case "Camioneta":
				this.vehicleKind = [3, "Camioneta", 45, 1.35];
				break;
			case "Furgón":
				this.vehicleKind = [4, "Furgón", 80, 1];
				break;
			case "Camión":
				this.vehicleKind = [5, "Camión", 120, 1.5];
				break;
		}
	}
	
	setCost() {
		this.cost = this.vehicleKind[2] + this.vehicleKind[3] * this.distance;
		if (this.pickUp) {
			this.cost += 25;
		}
		this.cost = roundNumber(this.cost, 2);
	}
}
