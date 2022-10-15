import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0

function LogingButton () {
    const { loginWithRedirect } = useAuth0()
    return (
        <button type="button" className="btn btn-secondary" onClick={() => loginWithRedirect()}>LOGIN</button>

    )
}

export default LogingButton
