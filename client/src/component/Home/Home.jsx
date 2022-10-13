import React from 'react';
import Cards from '../Cards';
import NavBar from '../NavBar/Navbar';
import Filters from '../Filters/Filters'
import Footer from '../Footer';

function Home(){
    return(
        <div>
            <NavBar />
            <Filters />
            <Cards />
            <Footer />
        </div>
    )
}


export default Home