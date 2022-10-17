import React, { useState } from "react";
import '../SearchBar/SearchBar.css';
import { useDispatch, useSelector } from 'react-redux'
import { getSellers } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const queryParams = useSelector(state => state.queryParams)

  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSellers({
      ...queryParams,
      title: input
    }));
    setInput('');

  }

  return (
    <div className="container-fluid mx-5">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar..."
          aria-label="Buscar"
          onChange={e => handleInputChange(e)}
        />
        <button
          className="btn btn-outline-success"
          id="buttonSearch"
          type="submit"
          onClick={e => handleSubmit(e)}
        >Buscar
        </button>
      </form>

    </div>
  )
}


export default SearchBar