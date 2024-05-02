import React from 'react';
import Jumbotron from './Jumbotron';
import Deck from './Deck';

const BodyContainer = () => {
    return (
       <>
         <div className="container-fluid mt-5">
           
            <Jumbotron />
            <Deck />
            </div>
           
         
       </>
    );

}

export default BodyContainer;