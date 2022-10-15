import { useState } from "react"
import states from "./barrios-data"
import { v4 as uuidv4 } from 'uuid';
import { validate } from "./auxiliary";

function Register(props) {

  const [input, setInput] = useState({
    name: '',
    lastName: '',
    password: '',
    phone: '',
    email: '',
    state: '',
    proveedor: false
  })

  const [error, setError] = useState({})

  const changeState = function (e) {

    if (e.target.name !== 'proveedor') {
      e.preventDefault()
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
      setError(validate({
        ...input,
        [e.target.name]: e.target.value
      }))
      console.log(error)
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.checked,
        lastName: ''
      })
      if (e.target.checked === false) {
        setError(
          {...error,
            lastName: "Lastname is required"
        }
        )
      }
    }
  }

  const option_states = () => {
    return states && states.map(city =>
      <option key={uuidv4()} value={city}>{city}</option>
    )
  }

  const postRegister = (event) => {
    event.preventDefault();
    if(!Object.keys(error).length) {
      console.log({ ...input, ID: uuidv4()})
    }
  }


  return (
    <form className="form-check form-switch my-3 mx-5">
      <div className="input-group has-validation my-3 mx-5">
        <input className="form-check-input me-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" name='proveedor' onClick={(e) => changeState(e)} />
        <label className="form-check-label" for="flexSwitchCheckDefault">I'm a supplier</label>
      </div>

      <div className="input-group has-validation">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        <div className="form-floating is-invalid">
          <input type="text" className={!error.name ? 'form-control ms-2' : "form-control is-invalid ms-2"} id="floatingInputName" placeholder="Name" name='name' required onChange={(e) => changeState(e)} />
          <label for="floatingInputGroup2">Name</label>
          {error.name && <div className="invalid-feedback">
            {error.name}
          </div>}
          {!input.proveedor && <div className="input-group has-validation">
            <div className="form-floating is-invalid">
              <input type="text" className={!error.lastName ? 'form-control ms-2' : "form-control is-invalid ms-2"} id="floatingInputlastName" placeholder="lastName" name='lastName' required onChange={(e) => changeState(e)} />
              <label for="floatingInputGroup2">Lastname</label>
            </div>
            {error.lastName && <div className="invalid-feedback">
              {error.lastName}
            </div>}
          </div>}
        </div>

      </div>

      <div className="input-group has-validation">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
        </svg>
        <div className="form-floating is-invalid">
          <input type="password" className={!error.password ? 'form-control ms-2' : "form-control is-invalid ms-2"} id="floatingInputPassword" placeholder="Password" name='password' required onChange={(e) => changeState(e)} />
          <label for="floatingInputGroup2">Password</label>
        </div>
        {error.password && <div className="invalid-feedback">
          {error.password}
        </div>}
      </div>

      <div className="input-group has-validation">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        <div className="form-floating is-invalid">
          <input type="tel" className={!error.phone ? 'form-control ms-2' : "form-control is-invalid ms-2"} id="floatingInputNumber phone" placeholder="Number phone" name='phone' required onChange={(e) => changeState(e)} />
          <label for="floatingInputGroup2">Number phone</label>
        </div>
        {error.phone && <div className="invalid-feedback">
          {error.phone}
        </div>}
      </div>

      <div className="input-group has-validation">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
          <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
          <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
        </svg>
        <div className="form-floating is-invalid">
          <input type="email" className={!error.email ? 'form-control ms-2' : "form-control is-invalid ms-2"} id="floatingInputEmail" name='email' placeholder="Email" required onChange={(e) => changeState(e)} />
          <label for="floatingInputGroup2">Email</label>
        </div>
        {error.email && <div className="invalid-feedback">
         {error.email}
        </div>}
          {error.state && <div className="invalid-feedback">
            {error.state}
          </div>}
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
        <select className="form-select form-select-lg mb-3" name='state' aria-label=".form-select-lg example" onChange={(e) => changeState(e)} value={input.state}>
          <option value=''>Select to state</option>
          {
            option_states()
          }
        </select>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit" value='register' onClick={(event) => { postRegister(event) }}>Register</button>
      </div>

    </form>
  )
}

export default Register