// Exercice 1: Ecrire une fonction largestNumber qui accepte 4 chiffres en paramètres et retourne le plus grand de tous.

/*
function largestNumber(num1, num2, num3, num4) {
  const calcul1 = Math.max(num1, num2);
  const calcul2 = Math.max(num3, num4);
  return Math.max(calcul1, calcul2);
}
const resultat = largestNumber(1000, 2222, 3333, 404);
console.log(resultat);
*/

// OU :

/*
function max(x,y){
  return x>y? x : y
}
function largestNumber (a,b,c,d){
  const maxAB = max(a,b)
  const maxCD = max(c,d)
  return max(maxAB,maxCD)
  //ou return max(max(a,b),max(c,d));
}
*/

//Exercice 2: Ecrire une fonction longestWord qui accepte 2 chaînes de caractères en paramètre et retourne la plus longue des deux.

/*
function longestWord(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  }
  return string2;
}
const resultat = longestWord('bonjour', 'Hello');
console.log(resultat);

//OU 

function longestWord(string1,string2) {
  return string1.length >string2.length ? string1 : string2;
}

*/

//Exercice 3: Ecrire une fonction countdown qui prend en paramètre un nombre et le décrémente jusqu'à 0 en affichant tous les chiffres sur la console.

// function countdown(num) {
//   if (num >= 0) {
//     console.log(num);
//     countdown(num - 1);
//   }
// }
// countdown(15);

//Exercice 4: Ecrire une fonction simpleCounter qui prend un nombre positif et affiche les chiffres entre 0 et ce nombre.

/*
function simpleCounter(num, currentNumber) {
  if (currentNumber <= num) {
    console.log(currentNumber);
    simpleCounter(num, currentNumber + 1);
  }
}

function counterWrapper(x) {
  return simpleCounter(x, 0);
}
counterWrapper(10);

//OU en une fonction
function simpleCounter(currentNumber, num) {
  console.log(currentNumber)
  if (currentNumber < num) {
    return simpleCounter(currentNumber+1, num)
  }
}
*/

//Exercice 5: Ecrire une fonction counter qui prend 2 chiffres en paramètres et affiche tous les nombres entre ces deux chiffres.

/*
function counter(num1, num2) {
  if (num1 <= num2) {
    console.log(num1);
    counter(num1 + 1, num2);
  }
}
counter(5, 10);
*/

// Exercice 6: Ecrire une fonction advancedCounter qui prend 2 chiffres non-ordonnés et qui affiche les nombres entre ces deux chiffres.

/*
function advancedCounter(currentNumber, num) {
  if (currentNumber <= num) {
    console.log(currentNumber);
    advancedCounter(currentNumber + 1, num);
  }
}
function calculCounter(x, y) {
  if (y > x) {
    advancedCounter(x, y);
  } else {
    advancedCounter(y, x);
  }
}

calculCounter(5, 10);
*/

//Exercice 7: Ecrire une fonction synchronizedCounter qui prend en paramètre un nombre et affiche tous les chiffres entre 0 et ce nombre à raison d'un nombre par seconde.

function synchronizedCounter(num) {
  setTimeout(function() {
    //setTimeout peut prendre en parametre une REFERENCE de fonction ou définir une fonction anonyme
    if (num >= 0) {
      console.log(num);
      synchronizedCounter(num - 1);
    }
  }, 1000);
}
synchronizedCounter(5);

//OU
/*
function synchronizedCounter(currentNumber, num) {
  setTimeout(function() {
    if (currentNumber <= num) {
      console.log(currentNumber);
      synchronizedCounter(currentNumber + 1, num);
    }
  }, 1000);
}
synchronizedCounter(-1, 5);
*/
