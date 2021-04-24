/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "for" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "for" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

'use strict';

console.log('Desde 0 a 100 de 10 en 10');
for (let index = 0; index <= 100; index += 10) {
    console.log(index);
}

console.log('Desde 100 a 0 de 25 en 25');
for (let index = 100; index >= 0; index -= 25) {
    console.log(index);
}
