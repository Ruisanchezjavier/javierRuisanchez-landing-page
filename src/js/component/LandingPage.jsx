import React from 'react';
import Navbar from './Navbar';
import BodyContainer from './BodyContainer';
import Footer from './Footer';

const LandingPage = () => {
    return (
       <>
         <div className="landingPage">
            <Navbar />
            <BodyContainer />
            <Footer />
         </div>
       </>
    );

}

export default LandingPage;