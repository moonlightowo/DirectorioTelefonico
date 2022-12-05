import React from "react";
import './ListaContactos.css'

function ListaContactos(props){
    return(
        <div className="ListaAmigos">
            <h2>Mis Contactos</h2>
            {props.children}
        </div>
    )
}

export default ListaContactos;