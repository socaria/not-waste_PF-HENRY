import React from "react";
import '../SearchBar/SearchBar.css'

function SearchBar(){
    return(
        <div className="container-fluid mx-5">
           <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn btn-outline-success" id="buttonSearch" type="submit">Buscar</button>
      </form>

        </div>
    )
}


export default SearchBar