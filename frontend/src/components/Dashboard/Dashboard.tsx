import React from "react";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row-1 row row-md-2 row-lg-3 row-sm-1">
        <div className="col items">
          <div
            className="card h-100 btn btn-primary"
            style={{ width: "17rem" }}
          >
            <img
              src="products.png"
              className="card-img-top imagen-card img-fluid"
              alt="..."
            />
            <h2 className="card-title text-center">Productos</h2>
          </div>
        </div>
        
        <div className="col items">
          <div
            className="card h-100 btn btn-primary"
            style={{ width: "17rem" }}
          >
            <img
              src="purchases.png"
              className="card-img-top imagen-card img-fluid"
              id="usuarios"
              alt="..."
            />
            <h2 className="card-title text-center">Compras</h2>
          </div>
        </div>
        <div className=" col items">
          <div
            className="card h-100 btn btn-primary"
            style={{ width: "17rem" }}
          >
            <img
              src="sales.png"
              className="card-img-top imagen-card img-fluid"
              id=""
              alt="..."
            />
            <h2 className="card-title text-center">Ventas</h2>
          </div>
        </div>
      </div>
      <div className="row-1 row row-md-2 row-lg-3 row-sm-1">
        <div className="col items">
          <div
            className="card h-100 btn btn-primary"
            style={{ width: "17rem" }}
          >
            <img
              src="statistics.png"
              className="card-img-top imagen-card img-fluid"
              id="statistics"
              alt="..."
            />
            <h2 className="card-title text-center">Estadisticas</h2>
          </div>
        </div>
        <div className="col items">
          <div
            className="card h-100 btn btn-primary"
            style={{ width: "17rem" }}
          >
            <img
              src="suppliers.png"
              className="card-img-top imagen-card img-fluid"
              id=""
              alt="..."
            />
            <h2 className="card-title text-center">Proveedores</h2>
          </div>
        </div>
        <div className="col items">
          <div
            className="card h-100 btn btn-primary"
            style={{ width: "17rem" }}
          >
            <img
              src="users.png"
              className="card-img-top imagen-card img-fluid"
              id="usuarios"
              alt="..."
            />
            <h2 className="card-title text-center">Usuarios</h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
