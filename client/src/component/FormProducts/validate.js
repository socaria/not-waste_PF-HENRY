export function validate(input) {
  let error = {};

  if (!input.name) {
    error.name = "El nombre es requerido...";
  } else if (!/^[A-Za-z0-9\s]+$/g.test(input.name)) {
    error.namesupplier =
      "El nombre no es válido. Solo se permiten letras y números...";
  }

  if (!input.price) {
    error.price = "Debe ingresear una un precio...";
  }

  if (!input.realValue) {
    error.realValue = "Debe ingresar el valor real de su producto...";
  }

  if (input.description === "") {
    error.description = "La descripción es requerida...";
  }

  return error;
}
