import React from 'react';
import {AppBar} from "@material-ui/core";
import BarSesion from './bar/BarSesion';

//Creo un componente de barra de navegacion estatica, no va a importar el componente que se 
//carga en el App.js, esta barra siempre se va a mostrar.
const AppNavbar = () => {

    return (
       <AppBar position="static">  {/*AppBar: es un componente de Material-UI*/}
         <BarSesion /> {/*Importo el componente creado*/}
       </AppBar>
     );
};

export default AppNavbar;