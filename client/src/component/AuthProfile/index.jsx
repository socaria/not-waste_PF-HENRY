import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0
import JSONPretty from 'react-json-pretty'; //es para ver el json en la localhost
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function AuthProfile () {

    const {user, isAuthenticated} = useAuth0() //isAuthenticated me informa si es usuario esta logueado o no
    return (
        isAuthenticated &&
        <div>
            <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={user}></JSONPretty>
            {user && <img src={user.picture} alt={user.name}/>}
            {user && <h2>{user.name}</h2>}
            {console.log(user)}

        </div>
    )
}

export default AuthProfile