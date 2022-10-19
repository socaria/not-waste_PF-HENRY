import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { perfil1 } from './Perfil1';
import { perfil2 } from './Perfil2';



function Profile(props) {

    props = perfil1

    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        email: '',
        adress: '',
        cuit: '',
        imagen: '',
        category: []
    })


    useEffect(() => {
        if (props.enabled) {
            setProfile(props)
        }
        if (props.enabled === false) {
            alert('Disabled user. Contact support if you think there is an error.')
        }
    }, [props])


    return (
        <div>
            <NavBar />
            <form className="form-check form-switch my-3 mx-5">

                <div className="input-group has-validation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <div className="form-floating is-invalid">
                        <input type="text" readOnly className='form-control-plaintext' id="floatingInputName" placeholder="Name" value={profile.name} />
                        <label htmlFor="floatingInputGroup2">Nombre</label>
                    </div>
                </div>

                <div className="input-group has-validation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <div className="form-floating is-invalid">
                        <input type="text" readOnly className='form-control-plaintext' id="floatingInputName" placeholder="Name" value={profile.phone} />
                        <label htmlFor="floatingInputGroup2">Número de teléfono</label>
                    </div>
                </div>

                <div className="input-group has-validation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                    </svg>
                    <div className="form-floating is-invalid">
                        <input type="text" readOnly className='form-control-plaintext' id="floatingInputName" placeholder="Name" value={profile.email} />
                        <label htmlFor="floatingInputGroup2">Email</label>
                    </div>
                </div>

                <div className="input-group has-validation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <div className="form-floating is-invalid">
                        <input type="text" readOnly className='form-control-plaintext' id="floatingInputName" placeholder="Name" value={profile.adress} />
                        <label htmlFor="floatingInputGroup2">Dirección</label>
                    </div>
                </div>

                <div className="input-group has-validation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                    </svg>
                    <div className="form-floating is-invalid">
                        <input type="text" readOnly className='form-control-plaintext' id="floatingInputName" placeholder="Name" value={profile.cuit} />
                        <label htmlFor="floatingInputGroup2">CUIT</label>
                    </div>
                </div>

                <div className="input-group has-validation">
                    <div className="form-floating is-invalid">
                        <input type="text" readOnly className='form-control-plaintext' id="floatingInputName" placeholder="Name" value={profile.category.join(', ')} />
                        <label htmlFor="floatingInputGroup2">Categoria</label>
                    </div>
                </div>

            </form>
            <Footer />
        </div>
    )
}


export default Profile