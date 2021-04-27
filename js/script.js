
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

var km = prompt("Inserisci il numero di chilometri che vuoi percorrere");
console.log(km);

var age = prompt("Inserisci la tua età");
console.log(age);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

var ticketCost = km * 0.21;
console.log(ticketCost);
document.getElementById("total-cost").innerHTML = ticketCost.toFixed(2) ;

// va applicato uno sconto del 20% per i minorenni
var discount20 = ticketCost * 0.2;
console.log(discount20);

// va applicato uno sconto del 40% per gli over 65.
var discount40 = ticketCost * 0.4;
console.log(discount40);

// sconto applicato
if (age < 18) {
    document.getElementById("applied-discount").innerHTML = discount20.toFixed(2);
} else if (age >= 65) {
    document.getElementById("applied-discount").innerHTML = discount40.toFixed(2);
} else {
    document.getElementById("applied-discount").innerHTML = "0";
}

// Prezzo totale del biglietto
var total;
if (age < 18) {
    // minorenne
    total = ticketCost - discount20;

    document.getElementById("ticket-price").innerHTML = total.toFixed(2);
} else if (age >= 65) {
    // over 65
    total = ticketCost - discount40;

    document.getElementById("ticket-price").innerHTML = total.toFixed(2);
} else {
    // maggiorenni minori di 65
    total = ticketCost;

    document.getElementById("ticket-price").innerHTML = total.toFixed(2);
}
console.log(total.toFixed(2));