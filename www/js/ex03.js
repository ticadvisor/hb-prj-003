/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Solicita a un usuario su nombre y su primer apellido. Posteriormente
 * pregúntale si le apetece un café.
 *
 *  - Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@
 *    Juan Campos! En breves recibirá su café calentito en casa."
 *
 *  - Si el usuario no acepta: "¡Bienvenid@ Juan Campos! Para el que no quiere
 *    tengo yo mucho."
 *
 */

'use strict';

const userName = prompt("What's your name?");
const userSurname = prompt("What's your surname?");
let haveCoffee = confirm('Would you like to have a coffee?');

if (haveCoffee) {
    alert(
        `Welcome ${userName} ${userSurname}. You will receive your coffee shortly`
    );
} else {
    alert(
        `Welcome ${userName} ${userSurname}. Can I offer you something different to have?`
    );
}
