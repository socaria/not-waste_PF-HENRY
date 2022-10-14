import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0

function LogingButton () {
    const { loginWithRedirect } = useAuth0()
    return (
        <button type="button" class="btn" onClick={() => loginWithRedirect()}>LOGIN</button>

    )
}

export default LogingButton
