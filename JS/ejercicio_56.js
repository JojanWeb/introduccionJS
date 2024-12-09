// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

import { pedirDato } from "../funciones.js";

const saldo = pedirDato(`Ingrese el saldo: `,"float");

if (saldo < 100000) {
    alert(`Debe pagar un interes anual del 3%, equivalente a: ${(saldo * 0.03)}
    Y un saldo final de: ${saldo + (saldo * 0.03)}`)
} else {
    alert(`Debe pagar un interes anual del 4%, equivalente a: ${(saldo * 0.04)}
    Y un saldo final de: ${saldo + (saldo * 0.04)}`);
}
