import React from 'react';
import Jumbotron from './Jumbotron';
import Deck from './Deck';

const BodyContainer = () => {
    return (
       <>
         <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
            <Jumbotron />
            <Deck />
            </div>
            <div className="col-3"></div>
        </div>
       </>
    );

}

export default BodyContainer;