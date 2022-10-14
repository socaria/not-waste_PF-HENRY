import React from 'react';
import Supplier from '../Supplier/Supplier';
import NavBar from '../NavBar/Navbar';
import Filters from '../Filters/Filters'
import Footer from '../Footer';

function Home(){
    return(
        <div>
            <NavBar />
            <Filters />
            <Supplier />
            <Footer />
        </div>
    )
}


export default Home