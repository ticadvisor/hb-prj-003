/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Crea un bucle "while" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "while" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

'use strict';

let index = 0;

console.log('Desde 0 a 100 de 10 en 10');
while (index <= 100) {
    console.log(index);
    index += 10;
}

index = 100;

console.log('Desde 100 a 0 de 25 en 25');
while (index >= 0) {
    console.log(index);
    index -= 25;
}
