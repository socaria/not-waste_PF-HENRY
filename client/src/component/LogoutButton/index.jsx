import { useAuth0 } from '@auth0/auth0-react' //esto es un hook que da auth0

function LogoutButton () {
    const { logout } = useAuth0()
    return (
        <button type="button" className="btn" onClick={() => logout({ returnTo: "http://localhost:3000/home" })}>LOGOUT</button>

    )
}

export default LogoutButton