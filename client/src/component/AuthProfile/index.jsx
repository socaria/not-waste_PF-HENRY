import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0
// import JSONPretty from 'react-json-pretty'; //es para ver el json en la localhost
// var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function AuthProfile (profile) {

    const {user, isAuthenticated} = useAuth0() //isAuthenticated me informa si es usuario esta logueado o no
        if(isAuthenticated && profile=== "profile") {
            return user
        }
        return isAuthenticated
}

export default AuthProfile