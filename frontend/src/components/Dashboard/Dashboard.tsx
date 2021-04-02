import React from "react";

const Dashboard = () => {
  return (
    <div className="container p-5">
      <div className="row-1 row row-md-2 row-lg-3 row-sm-1">
        <div className="col items">
          <a className="card btn btn-primary d-f align-items-center" style={{height:'14rem',width : '14rem'}}href="/products">
            <img
              src="./img/products.png"
              className="card-img-top img-fluid mh-30 mw-100" style={{height:'10rem',width : '10rem'}}
              alt="..."
            />
            <h2 className="text-center   mv-100">Productos</h2>
          </a>
        </div>

        <div className="col items">
          <a className="card btn btn-primary d-f align-items-center" style={{height:'14rem',width : '14rem'}} href="#">
            <img
              src="./img/purchases.png"
              className="card-img-top img-fluid mh-30 mw-100" style={{height:'10rem',width : '10rem'}}
              id="usuarios"
              alt="..."
            />
            <h2 className="card-title text-center">Compras</h2>
          </a>
        </div>
        <div className=" col items">
          <a className="card btn btn-primary d-f align-items-center" style={{height:'14rem',width : '14rem'}} href="#">
            <img
              src="./img/sales.png"
              className="card-img-top img-fluid mh-30 mw-100" style={{height:'10rem',width : '10rem'}}
              id=""
              alt="..."
            />
            <h2 className="card-title text-center">Ventas</h2>
          </a>
        </div>
      </div>
      
      <div className="row-1 row row-md-2 row-lg-3 row-sm-1">
        <div className="col items">
          <a className="card btn btn-primary d-f align-items-center" style={{height:'14rem',width : '14rem'}} href="#">
            <img
              src="./img/statistics.png"
              className="card-img-top img-fluid mh-30 mw-100" style={{height:'6.5rem',width : '10rem' , margin: '1.3rem 0 2rem 0'}}
              id="statistics"
              alt="..."
            />
            <h2 className="card-title text-center">Estadisticas</h2>
          </a>
        </div>
        <div className="col items">
          <a className="card btn btn-primary d-f align-items-center" style={{height:'14rem',width : '14rem'}} href="#">
            <img
              src="./img/suppliers.png"
              className="card-img-top img-fluid mh-30 mw-100" style={{height:'10rem',width : '10rem'}}
              id=""
              alt="..."
            />
            <h2 className="card-title text-center">Proveedores</h2>
          </a>
        </div>
        <div className="col items">
          <a className="card btn btn-primary d-f align-items-center" style={{height:'14rem',width : '14rem'}} href="#">
            <img
              src="./img/users.png"
              className="card-img-top img-fluid mh-30 mw-100" style={{height:'10rem',width : '10rem'}}
              id="usuarios"
              alt="..."
            />
            <h2 className="card-title text-center" >Usuarios</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
