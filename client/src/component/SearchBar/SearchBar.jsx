import React, { useState } from "react";
import '../SearchBar/SearchBar.css';
import { useDispatch, useSelector } from 'react-redux'
import { getSellers } from "../../redux/actions";


function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  let queryParams = useSelector(state => state.queryParams)

  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    queryParams={...queryParams, description: input}
    dispatch(getSellers(queryParams));
    console.log('queryParams', queryParams)

  }

  return (
    <div className="container-fluid mx-5">
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Buscar..."
          aria-label="Buscar"
          onChange={e => {handleInputChange(e)}}
        />
        <button
          className="btn btn-outline-success"
          id="buttonSearch"
          type="submit"
          onClick={e => {handleSubmit(e)}}
        >Buscar
        </button>
      </div>

    </div>
  )
}


export default SearchBar