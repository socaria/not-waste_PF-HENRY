import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prodDetail } from '../../redux/actions'
import style from './details.module.css'
function Details(props) {
console.log(props)
  // const  id = props.match.params.id
  const dispatch = useDispatch()
  const product = useSelector(state => state.prodDetails)
  useEffect(()=>{
    dispatch(prodDetail(props))
  },[])

const prodDetails = product?.map(e => {
  return {
      name: e.name,
      description: e.description, 
      price: e.price
  } 
}) 

console.log(prodDetails )
  return (
    <div>
                 
                { prodDetails?.length > 0 ? prodDetails.map(e => {
                    return (
                      <div className={style.cont}>
                        <h4 className={style.tittle}>Name: {e.name}</h4>
                        <p>Price: {e.price}</p>
                        <p> Desc: {e.description}</p>
                      </div>    
                        )
                    }) 
                    : <div >
                    <h3 >Sin nombre</h3>

                    </div> 
                }       
    </div>
  )
}


export default Details
