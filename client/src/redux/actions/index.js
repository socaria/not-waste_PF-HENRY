import axios from 'axios'

export default function getSellers () {
    return async function(dispatch) {
        try {
            const seller = await axios.get('http://localhost:3001/seller')
            dispatch({
                type: 'GET_SELLER',
                payload: seller.data
            })
            console.log(seller)
        } catch (error) {
            
        }
    }
}
