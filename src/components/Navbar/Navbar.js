import './Navbar.css';
import { CardWidget } from "../CartWidget/index";
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';


export const Navbar=()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-mine ">
  <div className="container-fluid ">
          <a className="navbar-brand " href="#">Giacce</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
       </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Accesorios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="#">Información</a>
        </li>
      </ul>
    </div>
    <CardWidget/> <h1 className="carrito">0</h1>
    <ItemDetailContainer/>
  </div>
</nav>
    );
}
