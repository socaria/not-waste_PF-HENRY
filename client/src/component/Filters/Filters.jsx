import React from "react";
import './Filters.css'


function Filters() {
    return (
        <div className="container-fluid my-3">
            <div className="contSelects">
                <select className="selects">
                    <option>CIUDADES</option>
                    <option>BARRIOS MAPEADOS</option>
                </select>
                <select className="selects">
                    <option>PRECIOS</option>
                    <option>MAYOR A MENOR</option>
                    <option>MENOR A MAYOR</option>
                </select>
                <select className="selects">
                    <option>DIETA</option>
                </select>
                <select className="selects">
                    <option>CATEGORIA</option>
                    <option>CATEGORIAS DEL PROVEEDOR</option>
                </select>
            </div>
        </div>
    )
}


export default Filters