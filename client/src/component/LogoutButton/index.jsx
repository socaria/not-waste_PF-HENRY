import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0

function LogoutButton () {
    const { logout } = useAuth0()
    return (
        <button type="button" class="btn" onClick={() => logout()}>LOGOUT</button>

    )
}

export default LogoutButton