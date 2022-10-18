import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getDiet } from "../../redux/actions";

function FormProduct() {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: "",
    price: "",
    realValue: "",
    image: "",
    description: "",
    stock: "",
  });
  const diets = useSelector((state) => state.diet);
  // console.log(diets)
  console.log(input)

  useEffect(() => {
    dispatch(getDiet())
  },[dispatch])

  function handleInput(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control 
          name='name' 
          value={input.name} 
          type="text" 
          placeholder="Nombre" 
          onChange={(e) => handleInput(e)} />
        <Form.Label></Form.Label>
        <Form.Control 
          name='price' 
          value={input.price} 
          type="number" 
          placeholder="Precio" 
          onChange={(e) => handleInput(e)} />
        <Form.Label></Form.Label>
        <Form.Control 
          name='realValue' 
          value={input.realValue} 
          type="number" 
          placeholder="Valor Real" 
          onChange={(e) => handleInput(e)} />
        <Form.Label></Form.Label>
        <Form.Control 
          name='description' 
          value={input.description} 
          type="text" 
          placeholder="Descripción" 
          onChange={(e) => handleInput(e)} />
        <Form.Label></Form.Label>
        <Form.Control 
          name='stock' 
          value={input.stock} 
          type="number" 
          placeholder="Stock" 
          onChange={(e) => handleInput(e)} />
        <Form.Label></Form.Label>
        <Form.Control 
          name='image' 
          value={input.image} 
          type="file" 
          placeholder="Imagen del producto" 
          onChange={(e) => handleInput(e)} />
      </Form.Group>

      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default FormProduct;
