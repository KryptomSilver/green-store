import React from "react";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="card p-3 login" style={{}}>
          <div className="card-body">
            <h2 className="text-center text-white">Iniciar Sesión</h2>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="" className="text-white">
                    Usuario:
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="text-white">
                    Contraseña:
                  </label>
                  <input type="password" className="form-control" />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center  justify-content-center">
              <a href="#" className="btn btn-success btn-lg w-50">
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
