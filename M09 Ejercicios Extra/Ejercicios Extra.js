/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = [];
   for(let prop in objeto) {
      let subArr = [];
      subArr.push(prop.toString());
      subArr.push(objeto[prop]);
      arr.push(subArr);
  }
   return arr;  
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let obj = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
  };
  for (let i = 0; i < string.length; i++) {
      let letra = string[i];
      if(obj.hasOwnProperty(letra) == true) {
          obj[letra] = obj[letra] + 1;
      }
  }
   for(let prop in obj) {
      if(obj[prop] == 0) {
          delete obj[prop];
      } else {
          continue;
      }
   }
   console.log(obj)
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayus = [];
   let minus = [];
   let arr = [];

   for(let i = 0; i < string.length; i++) {
      if(string[i] == string[i].toUpperCase()) {
       mayus.push(string[i])
      } else {
       minus.push(string[i])
      }
   }
   let junto1 = mayus.join('');
   let junto2 = minus.join('');
   arr.push(junto1);
   arr.push(junto2);
   let str = arr.join('')
   return str;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arr = [];
   let aux = [];
   for(let i = 0; i < frase.length + 1 ; i++) {
       if(frase[i] == ' ' || frase[i] == undefined) {
           aux.reverse()
           let juntar = aux.join('')
           arr.push(juntar)
           aux = [];
           continue;
       } else {
           aux.push(frase[i]);
       }
   }
   let str = arr.join(' ');
   return str;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let aux = numero.toString()
   let arr = [];
   for(let i = 0; i < aux.length; i++) {
       arr.unshift(aux[i]);
   }
   let comparador = arr.join('');
   if(comparador == aux){
       return "Es capicua";
   } else {
       return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const regex = /[abc]/g
   let str = string.replaceAll(regex, "")
   return str;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arr = arrayOfStrings.sort(function(a, b) {
      return a.length - b.length
    });
  return arr;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = [];
   for(let i = 0; i < array1.length ; i++) {
       if(array2.includes(array1[i]) == true) {
           arr.push(array1[i])
       } else {
           continue;
       }
   }
   return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
