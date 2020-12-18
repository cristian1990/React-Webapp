//Importo React
import React, { useState, useEffect } from "react";
//Importo los estilos personalizados
import style from '../Tool/Style';
//Importo los componentes de Material-UI
import {Container, Typography, Grid, TextField, Button} from "@material-ui/core";
import { obtenerUsuarioActual, actualizarUsuario } from "../../actions/UsuarioAction";

//Creo un functional component
const PerfilUsuario = () => {

    //Creo una variable de estado (usuario) para almacenar la data del usuario que viene del response, y mostrarla en los input 
    //[variable, Metodo] = useState
    const [usuario, setUsuario] = useState({
      nombreCompleto: "",
      email: "",
      password: "",
      confirmarPassword: "",
      username: ""
    });

    // Funcion que permite almacenar los datos en el Virtual DOM
    const ingresarValoresMemoria = (e) => { // e: Representa el contenido ingresado en el input
      //Obtengo el name y value del input
      const { name, value } = e.target;
      //Inserto dentro de la variable de estado
      setUsuario((anterior) => ({ 
        ...anterior, //Mantiene el valor anterior
        [name]: value, //Solo cambia el input donde se este ingresando data
      }));
    };

    //Cuando finaliza la cargar del componente grafico, quiero que se escriban los datos del usuario logueado en los input
    //useEffect: Es un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, 
    //ya sea por un cambio de estado, por recibir props nuevas o, y esto es importante, porque es la primera vez que se monta.
    useEffect(() => { //Solo se dispara 1 vez porque no indico parametros
      //Importo el Action 
      obtenerUsuarioActual().then(response => {
        //console.log("Data enviada en el response del usuario actual", response);
        setUsuario(response.data); //Llamo al setUsuario para actualizar la informacion
      });
    }, [])
 
    //Funcion para guardar la informacion del usuario
    const guardarUsuario = (e) => {
      e.preventDefault(); //Evito que haga el submit
      console.log('usuario beofre send', usuario);
      //Importo el Action, cuando actualizo un usuario tambien me tiene que devolver la data actualizada
      //porque va a generar un nuevo Token, y eso lo dejo volver a cargar en el LocalStorage
      actualizarUsuario(usuario).then((response) => {
        window.localStorage.setItem("token_seguridad", response.data.token);
      });
    };

    return (   
      <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}> {/*Agrego estilos en linea mediante JSX*/}
        <Typography component="h1" variant="h5">  {/*Typography: Formato de titulo, va de H1 a H5 dependiendo del dispositivo*/ }
          Perfil de Usuario
        </Typography>
        {/*Creo el formulario*/} 
        <form style={style.form}>  {/*Agrego estilos en linea mediante JSX*/}
          {/*GRILLA PARA INPUT*/}
          <Grid container spacing={2}>  {/*Grilla Padre con un espacio entre de 2 entre las grillas hijas*/}
            <Grid item xs={12} md={12}>  {/*item: Indica que es una grilla hija*/}
              {/*TextField: Permite agregar un campo de texto*/}
              {/*value: Toma el valor el useState y lo muestra en el input*/}
              {/* onChange: detecta cuando cambia el valor de un elemento de entrada y lanza una funcion.*/}
              <TextField
                name="nombreCompleto"
                value={usuario.nombreCompleto}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label="Ingrese nombre y apellidos"
              />
            </Grid>
            <Grid item xs={12} md={6}>     
              <TextField
                name="username"
                value={usuario.username}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label="Ingrese Username"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                value={usuario.email}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label="Ingrese email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                value={usuario.password}
                onChange={ingresarValoresMemoria}
                type="password"
                variant="outlined"
                fullWidth
                label="Ingrese password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="confirmarPassword"
                value={usuario.confirmarPassword}
                onChange={ingresarValoresMemoria}
                type="password"
                variant="outlined"
                fullWidth
                label="confirme password"
              />
            </Grid>
          </Grid>
           {/*GRILLA PARA BOTONES*/}
          <Grid container justify="center"> {/*Grilla Padre con un espacio entre de 2 entre las grillas hijas*/}
            <Grid item xs={12} md={6}> {/*item: Indica que es una grilla hija*/}
              <Button
                type="submit"
                onClick={guardarUsuario}
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                style={style.submit}
              >
                Guardar Datos
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    );
};

//Exporto el componente para que se pueda utilizar desde otros archivos
export default PerfilUsuario;