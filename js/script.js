// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let finalPrice = document.getElementById('testo');
let km = parseInt (prompt('Quanti chilometri vuoi percorrere?'));
let age = parseInt (prompt('Qual è l\ età del passeggero'));
const kmprice = 0.21;
let total = (km * kmprice );
let totalPrice;

if (isNaN(km) || isNaN(age)) {
    finalPrice.innerHTML = 'Devi inserire dei numeri!';
    location.reload();
}

if (age < 18) {
    totalPrice = (total - (total * 0.2)).toFixed(2);
    finalPrice.innerHTML = `Il prezzo totale è ${totalPrice}€`;
} else if (age > 65) {
    totalPrice = (total - (total * 0.4)).toFixed(2);
    finalPrice.innerHTML = `Il prezzo totale è ${totalPrice}€`;
} else {
    totalPrice = (total).toFixed(2);
    finalPrice.innerHTML = `Il prezzo totale è ${totalPrice}€`;
}
