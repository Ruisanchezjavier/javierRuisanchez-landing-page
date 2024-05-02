import React from 'react';

const Jumbotron = () => {
    return (
       <>
            <div className="jumbotron p-5 mb-4 bg-light rounded-3 mt-4">
                <div className="container-fluid py-5">
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores ea nulla laudantium rem cupiditate repudiandae saepe veniam ab. Ipsum, accusamus voluptates ipsa hic eum ut voluptate fugit placeat voluptatem?</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
            </div> 
       </>
    );

}

export default Jumbotron;