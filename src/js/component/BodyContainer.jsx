import React from 'react';
import Jumbotron from './Jumbotron';
import Deck from './Deck';

const BodyContainer = () => {
    return (
       <>
         <div className=" body row container-fluid">
            <div className="col"></div>
            <div className="col-11">
            <Jumbotron />
            <Deck />
            </div>
            <div className="col"></div>
        </div>
       </>
    );

}

export default BodyContainer;