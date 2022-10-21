import { v4 as uuidv4 } from "uuid";
import { registerPost, disDeleteProduct } from "./middleware";


export default function createcards(data) {
     
        // hace referencia a que no se puede activar un producto en una fecha anterior ------------->
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;  //<------------ hace referencia a que no se puede activar un producto en una fecha anterior


        const posteo = (e) => {
        e.preventDefault()
        let data = {productId: e.target.name, date: e.target[0].value, amount: Number(e.target[1].value)}
        registerPost(data)
        document.getElementById(e.target.name).reset()
        }

        const eliminar = (e) => {
            setTimeout(() => {
                window.location.reload()
            }, 100);
            disDeleteProduct(e.target.name)
        }

        return (
            data ? data.map((e) =>
                <div key={uuidv4()} className="card text-bg-light w-75 m-3" height={"250px"}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={e.image} className="img-fluid border border-3 rounded-5" alt="No es posible cargar la imagen" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" >
                                <button className="btn btn-outline-danger col-md-4 mb-2" type="button" name={e.id} onClick={(event) => eliminar(event)}>Eliminar producto</button>
                                <h5 className="card-title">Nombre: {e.name}</h5>
                                <p className="card-text">Descripcion: {e.description}</p>
                                <p className="card-text"><small className="text-muted">Precio: ${e.price}</small></p>
                                <p className="card-text"><small className="text-muted">Precio real: ${e.realValue}</small></p>
                                <p className="card-text"><small className="text-muted">Stock: {e.stock}</small></p>
                                <p className="card-text"><small className="text-muted">Publicaciones activas: {e.posts.length ? e.posts.length : " Aun no publico este producto, haga click abajo para que sea visible por el cliente."}</small></p>
                            </div>
                            <form id={e.id} name={e.id} onSubmit={(e) => posteo(e)}>
                                <div className="card-body" >
                                    <p>Seleccione fecha y cantidad para realizar una publicacion:</p>
                                    <input type="date" min={today} required></input>
                                    <input id="number" type="number" min="1" max="10" required/>
                                    <button form={e.id} type="subtmit">Publicar</button>
                                </div>
                            </form>
                        </div>
                    </div></div>) : <h1>chau</h1>
        )

    }