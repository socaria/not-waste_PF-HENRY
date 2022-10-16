export default function prodDetail (id) {
    return async function(dispatch) {
        try {
            let detailProduct = await (await axios.get('http://localhost:3001/product/' + id))
            detailProduct = detailProduct.data[0];
                        dispatch({
                type: 'PROD_DETAIL',
                payload: detailProduct
            })
            //console.log(price.data)
        } catch (error) {
            
            console.log(error)
        }
    }
}
