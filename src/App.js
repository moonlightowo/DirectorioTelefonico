import './App.css';
import React from 'react';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';

import {Busqueda} from './Busqueda';
import {DirectorioContext, DirectorioProvider} from './Contex/DirectorioProvider'
import DatosContacto from './Inputs/DatosContacto';
function App(){

  // let contactos=[
  //   {
  //     nombre: "moon",
  //     telefono: "3223843443",
  //     correo: "nose.nose@gmail.com"
  //   },
  //   {
  //     nombre: "Darkness",
  //     telefono: "3224384334",
  //     correo: "sise.sise@gmail.com"
  //   },
  //   {
  //     nombre: "xd",
  //     telefono: "XD",
  //     correo: "xD.Xd@gmail.com"
  //   }
  // ]

  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
        ({
          contactosFiltrados,
          borrarContacto,
          contadorContactos,
          modal,
          setModal
        })=>(
          <React.Fragment>
            <h1>DIRECTORIO ({contadorContactos})</h1>
            <Busqueda/>
            <button onClick={()=>{setModal(true)}} className="btn-agregar">Agregar Contacto</button>
            <ListaContactos>
              {
                contactosFiltrados.map((contacto)=>{
                  return(
                    <Contacto
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                    telefono={contacto.telefono}
                    borrarContacto = {()=>{borrarContacto(contacto.nombre)}}
                    />
                  )
                })
              }
            </ListaContactos>
            {modal && <DatosContacto/>}
          </React.Fragment>
        )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;
