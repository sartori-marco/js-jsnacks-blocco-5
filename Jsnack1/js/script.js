// Jsnack1
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


// creo l'oggetto
var palla = {
  nome : 'palla',
  peso : '10'
};

console.log(palla);


// inserisco un prompt per la modifica
var modifica = parseInt(prompt('Modifica il peso della palla'));
palla.peso = modifica;

// visualizzo l'oggetto con la modifica con for in
for (var k in palla) {
  console.log(k + ': ' + palla[k]);
}
