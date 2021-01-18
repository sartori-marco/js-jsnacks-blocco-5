// Jsnack2
//  Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


// creo l'array di 10 oggetti che rappresentano una zucchina
// RICORDA : I NUMERI (5, 25, 65...) NON VANNO TRA ' ' 
// --> '20' <-- NO!
// --> 25 <--SI


var zucchine = [
  {
    nome : 'nome1',
    peso: 3,
    lunghezza: 6
  },

  {
    nome : 'nome2',
    peso: 5,
    lunghezza: 9
  },

  {
    nome : 'nome3',
    peso: 1,
    lunghezza: 10
  },

  {
    nome : 'nome4',
    peso: 1,
    lunghezza: 16
  },

  {
    nome : 'nome5',
    peso: 9,
    lunghezza: 7
  },

  {
    nome : 'nome6',
    peso: 6,
    lunghezza: 1
  },

  {
    nome : 'nome7',
    peso: 13,
    lunghezza: 16
  },

  {
    nome : 'nome8',
    peso: 4,
    lunghezza: 9
  },

  {
    nome : 'nome9',
    peso: 3,
    lunghezza: 6
  },

  {
    nome : 'nome10',
    peso: 4,
    lunghezza: 4
  }
];

// calcolo il peso totale
var somma = 0;
for (var i = 0; i < zucchine.length; i++) {
  var zucchineTot = zucchine[i].peso;

  somma += zucchineTot;


};
console.log('Peso totale: ' + somma);





//
