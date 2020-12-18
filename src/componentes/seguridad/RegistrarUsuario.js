import React, {useState} from 'react';
//Agregamos las dependencias que utilizamos de material-ui
import {Container, Typography, Grid, TextField, Button} from '@material-ui/core';
//Importo los estilos personalizados
import style from '../Tool/Style';
//Importo el Action para registrar el usuario
import {  registrarUsuario } from '../../actions/UsuarioAction';

//Creamos un Functional Component 
const RegistrarUsuario = () => {
   
    //Variable de estado que almacenara los datos ingresados en el formulario
    //[variable, Metodo] = useState
    const [usuario, setUsuario] = useState({
        nombreCompleto : '',
        email : '',
        username: '',
        password : '',
        confirmarPassword:''
    })

    // Funcion que permite almacenar los datos en el Virtual DOM
    const ingresarValoresMemoria = e => { // e: Representa el contenido ingresado en el input
        //Obtengo el name y value del input
        const {name, value} = e.target;
        //Inserto dentro de la variable de estado
        setUsuario( anterior => ({
            ...anterior, //Mantiene el valor anterior
            [name] : value //Solo cambia el input donde se este ingresando data
            //NombreCompleto : 'vaxi drez'
        }))
    }

    // Funcion que muestra en el log, la data recibida del request y el token
    const registrarUsuarioBoton =  e => { // e: Representa el objeto boton
        e.preventDefault(); //Cancelo el submit
        //console.log('Imprime valores de memoria del usuario', usuario);

        //Llamo al Action para registrar el usuario
        registrarUsuario(usuario).then(response => { //response: respuesta del servidor
            console.log('se registro exitosamente el usuario', response); //Imprimo la respuesta
            window.localStorage.setItem("token_seguridad", response.data.token); //Almaceno el Token en el localStorage 
        });
    }

    //Interfaz grafica del componente, lo que se vera en pantalla
    return(
        <Container component="main" maxWidth="md" justify="center"> 
            <div style={style.paper}> {/*Agrego estilos en linea mediante JSX*/}
                <Typography component="h1" variant="h5">  {/*Typography: Formato de titulo, va de H1 a H5 dependiendo del dispositivo*/ }
                    Registro de Usuario
                </Typography>
                <form style={style.form}>  {/*Agrego estilos en linea mediante JSX*/}
                    {/*GRILLA PARA INPUT*/}
                    <Grid container spacing={2}>  {/*Grilla Padre con un espacio entre de 2 entre las grillas hijas*/}
                        <Grid item xs={12} md={12}>  {/*item: Indica que es una grilla hija*/}
                            {/*TextField: Permite agregar un campo de texto*/}
                            {/*onChange: Le lanza un metodo cuando se efectua un cambio en el campo*/}
                            {/*value: Toma el valor el useState y lo muestra en el input*/}
                            <TextField name="nombreCompleto" value={usuario.nombreCompleto} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Ingrese nombre y apellido" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="email" value={usuario.email} onChange={ingresarValoresMemoria} variant="outlined" fullWidth label="Ingrese su email" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="username" value={usuario.username} onChange={ingresarValoresMemoria}  variant="outlined" fullWidth label="Ingrese su usuario" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" value={usuario.password} onChange={ingresarValoresMemoria} type="password" variant="outlined" fullWidth label="Ingrese su password" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="confirmarPassword" value={usuario.confirmarPassword} onChange={ingresarValoresMemoria} type="password" variant="outlined" fullWidth label="Confirme su password" />
                        </Grid>
                    </Grid>
                    {/*GRILLA PARA BOTONES*/}
                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>  {/*Tamaño xs abarca 12 col y en md abarca 6 col*/}
                            <Button type="submit" onClick={registrarUsuarioBoton} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

//Exportamos el componente
export default RegistrarUsuario;