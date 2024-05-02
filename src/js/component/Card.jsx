import React from 'react';

const Card = () => {
    return (
       <>
          <div className="card">
            <img src="https://s.yimg.com/uu/api/res/1.2/nj6w8mbFrQFBm_tQiX_F0w--~B/aD0yNjQ3O3c9MzczNztzbT0xO2FwcGlkPXl0YWNoeW9u/https://img.huffingtonpost.com/asset/5cb62e40230000c2006db3ac.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer">
             <button className="btn btn-primary">Call to action</button>  
           </div>
          </div>
       </>
    );

}

export default Card;