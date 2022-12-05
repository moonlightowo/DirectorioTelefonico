import React from "react";
import './Busqueda.css'
import { DirectorioContext } from "../Contex/DirectorioProvider";

function Busqueda()
{   
    const {textoBusqueda, setTextoBusqueda} = React.useContext(DirectorioContext);

    function onBusquedaChage(event){
        setTextoBusqueda(event.target.value);
    }

    return(
        <React.Fragment>
            <input onChange={onBusquedaChage} value={textoBusqueda}></input>
        </React.Fragment>
    );
}

export {Busqueda};