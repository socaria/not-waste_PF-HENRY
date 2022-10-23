import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomer, getSellers } from "../../redux/actions";

function VerifyProfile(props) { //se debe pasar como propiedad el email a buscar en la base de datos

    const dispatch = useDispatch()
    const seller = useSelector(state => state.seller)
    useEffect(() => {
        dispatch(getSellers())
    }, [dispatch])
    const customer = useSelector(state => state.customer)
    useEffect(() => {
        dispatch(getCustomer())
    }, [dispatch])

    let respuesta = { exists: false }
    if (props) {

        seller && seller.map(e => {
            if (e.email === props.toLowerCase()) {
                respuesta = { exists: true, type: "seller", ...e }
            }
        })
        // seller && seller.map(e => e.email === props.toLowerCase() ? respuesta = {exists: true,type: "seller", ...e}: respuesta)
        customer && customer.map(e => {
            if (e.email === props.toLowerCase()) {
                respuesta = { exists: true, type: "customer", ...e }
            }
        })

    }

    return respuesta
}

export default VerifyProfile