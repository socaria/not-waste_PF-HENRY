// import React, { useEffect, useState } from "react";
// import './Filters.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { getCities, getDiet, getSellers, getProduct, orderPriceProduct } from "../../redux/actions";
// import Card from "../Card";

// function Filters() {
    
//     const dispatch = useDispatch()
    
//     const [, setOrden] = useState()

//     const seller = useSelector(state => state.seller)
//     const cities = useSelector(state => state.cities)
//     const diet = useSelector(state => state.diet)
//     const product = useSelector(state => state.product)
//     const price = useSelector(state => state.price)
// // console.log(seller)
// // console.log(product, 'hola')
// console.log(price)
//     useEffect(()=> {
//         dispatch(getCities())
//         dispatch(getSellers())
//         dispatch(getProduct())
//         dispatch(getDiet())

//     },[dispatch])

//     function handleCities(e) {
//         dispatch(getCities())
//         console.log(e.target.value)
//     }

//     function handleOrderPrice(e) {
//         e.preventDefault()
//         // dispatch(getProduct(e.target.value))
//         dispatch(orderPriceProduct(e.target.value))
//         setOrden(e.target.value)
//         // console.log(e.target.value)
//     }

//     function handleFilterDiet(e) {
//         dispatch(getDiet())
//     }

//     function handleFilterCategory(e) {
        
//     }
// // console.log(cities)

//     return (
//         <div className="container-fluid my-3">
//             <div className="contSelects">
//                 <select onChange={handleCities} className="selects">
//                     <option>CIUDADES</option>
//                     {
//                         cities?.map(cities => {
//                         return(
//                         <option value={cities.name} key={cities.id}>{cities.name}</option>
//                         )
                        
//                     }) 
//                     }
//                     <option>BARRIOS MAPEADOS</option>
//                 </select>


//                     <select onChange={handleOrderPrice} className="selects">
//                         <option>PRECIOS</option>
//                         <option value='mayor'>MENOR A MAYOR</option>
//                         <option value='menor'>MAYOR A MENOR</option>
//                     </select>


//                 <select onChange={handleFilterDiet} className="selects">
//                     <option>DIETA</option>
//                     {
//                         diet?.map(cities => {
//                         return(
//                         <option value={cities.name} key={cities.id}>{cities.name}</option>
//                         )
                        
//                     }) 
//                     }
//                 </select>
//                 <select onChange={handleFilterCategory} className="selects">
//                     <option>CATEGORIA</option>
//                     <option>CATEGORIAS DEL PROVEEDOR</option>
//                 </select>
//             </div>
//             <div>
//             {
//                 product?.map((e, i) => {
//                     return (
//                         <div key={i}>
//                             <Card image={e.image} name={e.name} price={e.price}/>
//                         </div>
//                     )
//                 })
//             }
//         </div>

//         </div>
//     )
// }


// export default Filters