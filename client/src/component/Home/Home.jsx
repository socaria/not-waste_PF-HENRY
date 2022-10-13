import React from 'react';
import Cards from '../Cards';
import NavBar from '../NavBar/Navbar';
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer';

function Home(){
    return(
        <div>
            <NavBar />
            <SideBar />
            <Cards />
            <Footer />
        </div>
    )
}


export default Home