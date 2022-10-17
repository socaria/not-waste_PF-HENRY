export function validate(input) {
  let error = {};

  if (!input.namesupplier) {
    error.namesupplier = "El nombre es requerido...";
  } else if (!/^[A-Za-z0-9\s]+$/g.test(input.namesupplier)) {
    error.namesupplier =
      "El nombre no es válido. Solo se permiten letras y números...";
  }

<<<<<<< HEAD
  if (!input.image) {
    error.image = 'Debe ingresear una imagen...'
  }

  if (!input.cities.length) {
    error.cities = 'Debe seleccionar al menos una ciudad!'
  }

  if (input.category === '') {
    error.category = 'La categoría es requerida...'
  }
=======
>>>>>>> 33874e502ed4e933a6cf7ea640d6d5d5c834dcf4
  if (!input.phone) {
    error.phone = "Número de teléfono es requerido...";
  } else if (
    !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g.test(
      input.phone
    )
  ) {
    error.phone = "Ingresa un numero de teléfono valido...";
  }
<<<<<<< HEAD
=======

  if (!input.image) {
    error.image = "Debe ingresear una imagen...";
  }

  if (input.category === "") {
    error.category = "La categoría es requerida...";
  }
>>>>>>> 33874e502ed4e933a6cf7ea640d6d5d5c834dcf4

  if (!input.adress) {
    error.adress = "La dirección es requerida...";
  }

  if (!input.cuit) {
    error.cuit = "CUIT es requerido...";
  } else if (
    !/\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g.test(input.cuit)
  ) {
    error.cuit = "Ingresar un número de CUIT...";
  }

  return error;
}
