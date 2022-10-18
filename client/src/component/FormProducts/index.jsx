import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

function FormProduct() {
  const [input, setInput] = useState({
    name: "",
    price: "",
    realValue: "",
    image: "",
    description: "",
    stock: "",
  });
  const diets = useSelector((state) => state.queryParams);
  console.log(diets?.diets);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Precio" />
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Valor Real" />
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Descripción" />
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Stock" />
        <Form.Label></Form.Label>
        <Form.Control type="img" placeholder="Imagen del producto" />
      </Form.Group>

      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default FormProduct;
