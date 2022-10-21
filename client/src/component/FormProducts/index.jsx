import React from "react";
import { useState, useEffect } from "react";
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getDiet, postProduct } from "../../redux/actions";
import { validate } from "../FormProducts/validate";
import VerifyProfile from "../VerifyProfile";
import AuthProfile from "../AuthProfile";

function FormProduct() {
  const [error, setError] = useState({});
  // const { user } = useAuth0();
  // console.log(user,'USUARIOOOOO')

  // const emailprueba = VerifyProfile(props)
  // console.log(emailprueba,' EMAEEEEALFMSLDFÑG')

  let log = AuthProfile("profile"); // esto puede ser {}, true o false
  let db = VerifyProfile(log.email);
  //console.log(db, 'DBBBB')

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    price: "",
    realValue: "",
    image: "",
    description: "",
    stock: "",
    diets: [],
    sellerId: db.id
  });

  const diets = useSelector((state) => state.diet);
  // const sellers = useSelector((state) => state.seller)
  // const sellerIdMap = sellers.find(e => e.id === )


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

  async function handleSubmit(e) {
    e.preventDefault();
    setError(validate(input));
    // const errorSubmit = validate(input);
    if (!Object.keys(error).length && input.diets.length) {
      alert("Producto añadido con exito");
      let imageObj = input.image;
      const data = new FormData();
      data.append("file", imageObj);
      data.append("upload_preset", "imagesnotwaste");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/sercm/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const url = await res.json();
      imageObj = url.secure_url;
      const inputMod = {
        ...input,
        image: imageObj,
      };
      console.log(inputMod, "INPUTMOD");
      dispatch(postProduct(inputMod));
      setInput({
        name: "",
        price: "",
        realValue: "",
        image: "",
        description: "",
        stock: "",
        diets: [],
        sellerId: db.id
      })
    } else {
      alert("Datos Faltantes");
    }
  }

  function handleSelectDiet(e) {
    if (!input.diets.includes(e.target.value)) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    setInput({
      ...input,
      diets: input.diets.filter((d) => d !== e.target.value),
    });
  }

  const changeStateImage = (e) => {
    const files = e.target.files[0];
    //console.log(files);
    setInput({
      ...input,
      image: files,
    });
  };

  return (
    <div>
      <NavBar />
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={input.description}
              name="description"
              onChange={(e) => handleInput(e)}
              placeholder="Descripción"
            />
          </Form.Group>
          {error.description && <p>{error.description}</p>}

          <Form.Label></Form.Label>
          <Form.Control
            name="image"
            type="file"
            placeholder="Imagen del producto"
            onChange={(e) => changeStateImage(e)}
          />
          {error.image && <p>{error.image}</p>}

          <Form.Label></Form.Label>
          <Form.Control
            name="stock"
            value={input.stock}
            type="number"
            placeholder="Stock"
            onChange={(e) => handleInput(e)}
          />
          {error.stock && <p>{error.stock}</p>}

          <Form.Label></Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => handleSelectDiet(e)}
          >
            <option>Seleccione una dieta</option>
            {diets?.map((e, i) => {
              return (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              );
            })}
          </Form.Select>
          {input.diets?.map((diet, i) => (
            <div key={i}>
              <p>{diet}</p>
              <button value={diet} onClick={(e) => handleDelete(e)}>
                X
              </button>
            </div>
          ))}


        </Form.Group>

        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Crear Producto
        </Button>
      </Form>
      <Footer />
    </div>
  );
}

export default FormProduct;
