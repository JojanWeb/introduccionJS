// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

import { pedirDato } from "../funciones.js";

const clasificarPizza = (ingredientesNoVege, ingredientesVege, ingrediente) => {
  let pizza;
  if (ingredientesVege.includes(ingrediente.toLowerCase())) {
    pizza = "Vegetariana";
  } else if (ingredientesNoVege.includes(ingrediente.toLowerCase())) {
    pizza = "No Vegetariana";
  } else {
    return false;
  }
  return pizza;
};

let ingredientesVege = ["pimiento", "tofu"];
let ingredientesNoVege = ["pepperoni", "jamon", "salmon"],
  ingrediente,
  pizzaTipo;
do {
  pizzaTipo = pedirDato(
    `Escriba el tipo de pizza que desea: 
    Vegetariana
    No vegetariana`,
    "string"
  );

  if (pizzaTipo === "vegetariana") {
    ingrediente = pedirDato(
      "Ingrese el ingrediente que desea: \n" + ingredientesVege.join(", ")
    );
  } else if (pizzaTipo === "no vegetariana") {
    ingrediente = pedirDato(
      "Ingrese el ingrediente que desea: \n" + ingredientesNoVege.join(", ")
    );
  }
} while (
  clasificarPizza(ingredientesNoVege, ingredientesVege, ingrediente) === false
);

const pizza = clasificarPizza(
  ingredientesNoVege,
  ingredientesVege,
  ingrediente
);

alert(
  "Los ingrediente de su pizza son Mozarella, Tomate y " +
    ingrediente +
    " Y la pizza es: " +
    pizza
);
