import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getDiet, postProduct } from "../../redux/actions";
import { validate } from "../FormProducts/validate";

function FormProduct() {
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    price: "",
    realValue: "",
    image: "",
    description: "",
    stock: "",
    diets: [],
  });

  const diets = useSelector((state) => state.diet);

  useEffect(() => {
    dispatch(getDiet());
    dispatch(postProduct());
  }, [dispatch]);

  function handleInput(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(validate(input));
    const errorSubmit = validate(input);
    if (Object.value(errorSubmit).length !== 0 || !input.diets.length) {
      alert("Datos Faltantes");
    } else {
      dispatch(postProduct(input));
      alert("Product añadido con exito");
      setInput({
        name: "",
        price: "",
        realValue: "",
        image: "",
        description: "",
        stock: "",
        diets: [],
      });
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control
          name="name"
          value={input.name}
          type="text"
          placeholder="Nombre"
          onChange={(e) => handleInput(e)}
        />
        {error.name && <p>{error.name}</p>}
        <Form.Label></Form.Label>
        <Form.Control
          name="price"
          value={input.price}
          type="number"
          placeholder="Precio"
          onChange={(e) => handleInput(e)}
        />
        {error.price && <p>{error.price}</p>}
        <Form.Label></Form.Label>
        <Form.Control
          name="realValue"
          value={input.realValue}
          type="number"
          placeholder="Valor Real"
          onChange={(e) => handleInput(e)}
        />
        {error.realValue && <p>{error.realValue}</p>}
        <Form.Label></Form.Label>
        <Form.Control
          name="description"
          value={input.description}
          type="text"
          placeholder="Descripción"
          onChange={(e) => handleInput(e)}
        />
        {error.description && <p>{error.description}</p>}
        <Form.Label></Form.Label>
        <Form.Control
          name="stock"
          value={input.stock}
          type="number"
          placeholder="Stock"
          onChange={(e) => handleInput(e)}
        />
        {error.image && <p>{error.image}</p>}
        <Form.Select aria-label="Default select example">
          <option value="">Seleccione la Dieta</option>
          <option value="sin tacc">Sin Tacc</option>
          <option value="vegana">Vegana</option>
          <option value="vegetarianos">Vegetarianos</option>
          <option value="sin gluten">Sin gluten</option>
          <option value="lacteos">Lacteos</option>
          <option value="pescatariano">Pescatariano</option>
        </Form.Select>
        <Form.Label></Form.Label>
        <Form.Control
          name="image"
          value={input.image}
          type="text"
          placeholder="Imagen del producto"
          onChange={(e) => handleInput(e)}
        />
      </Form.Group>

      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        Crear Producto
      </Button>
    </Form>
  );
}

export default FormProduct;
