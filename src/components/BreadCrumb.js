import React from 'react'
const Breadcrumb = ({ title }) => {
    return (

      // =================BREADCRUMB=================
      <section className="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Breadcrumb;