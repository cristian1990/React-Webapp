import { Avatar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import FotoUsuarioTemp from "../../../logo.svg";

//Constante para representar la logica de responsive con material-ui
const useStyles = makeStyles((theme) => ({ //Recibe como parametro el theme personalizado de mi App
    seccionDesktop: { //Logica cuando el usuario accede desde una pc
      display: "none", //Oculto
      [theme.breakpoints.up("md")]: { //Hasta que la pantalla sea una tablet o pc
        display: "flex", //Muestro el componente
      },
    },
    seccionMobile: { //Logica cuando el usuario accede desde un celular
      display: "flex", //comienza mostrando el componente
      [theme.breakpoints.up("md")]: { //Si la pantalla es mayor a md
        display: "none", //oculto
      },
    },
    grow: {
      flexGrow: 1, //Toma uel espacio disponible entre 2 etiquetas
    },
    avatarSize: {
      width: 40,
      height: 40,
    },
    list: {
      width: 251,
    },
  }));

const BarSesion = () => {

    const classes = useStyles();

    return (
        <Toolbar> {/* Donde coloco logos, links */}
             {/* Creo un boton de tipo hamburguesa | inherit: hereda el color del template*/}
            <IconButton color="inherit" >
                <i className="material-icons">menu</i> {/* menu: es el nombre del icono elegido material */}
            </IconButton>
            {/* Typography: Permite agregar un texto con formato de titulo */}
            <Typography variant="h6">Cursos Online</Typography>
             {/* classes: Representa a useStyles | grow: tomamos el espacio disponoble */}
            <div className={classes.grow}></div> 
            {/* Agrego los botones y le indico que solo aparecen en pantallas tablet o Desktop */}
            <div className={classes.seccionDesktop}>
                {/* inherit: Heredo los colores del theme */}
                <Button color="inherit" >Salir</Button>
                <Button color="inherit"> {"Nombre Usuario"} </Button>
                {/* Imagen del usuario logueado */}
                <Avatar src={FotoUsuarioTemp}></Avatar>
            </div>
            {/* Agrego boton y le indico que solo aparecen en pantallas mobile */}
            <div className={classes.seccionMobile}>
               <IconButton color="inherit">
               <i className="material-icons">more_vert</i> {/* more_vert: es el nombre del icono de Material */}
               </IconButton>
            </div>
      </Toolbar>
    );
};

export default BarSesion;