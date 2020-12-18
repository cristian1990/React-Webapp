
import React, { useState } from 'react';
//Importo los estilos personalizados
import style from '../Tool/Style';
//Importo el componente icono de Material-UI que quiero utilizar
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//Importo los componentes de Material-UI
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { loginUsuario } from '../../actions/UsuarioAction';

//Creo un functional component
const Login = () => {

    //Creo una variable de estado (usuario) que va a almacenar los datos ingresados en el Login
    const [usuario, setUsuario] = useState({
        Email : '',
        Password : ''
    })

    //Funcion que permite capturar los valores ingresados en el input
    const ingresarValoresMemoria = e => { // e: Representa el contenido ingresado en el input
        const {name,value} = e.target; //Obtengo el name y value del input
        setUsuario(anterior => ({  //Inserto dentro de la variable de estado
            ...anterior, //Mantiene el valor anterior
            [name] : value //Solo cambia el input donde se este ingresando data
        }))
    }

    //Funcion que hace el request para validar el usuario
    const loginUsuarioBoton = e => {
        e.preventDefault(); //Evito el submit
        loginUsuario(usuario) //Importo el Action, y le paso el obj usuario
            .then(response => { //response tiene la respuesta del servidor      
                console.log('Login Exitoso', response);
                //Si el login es exitoso, debo volver a actualizar la variable de token en localstorage
                window.localStorage.setItem('token_seguridad', response.data.token);
            })
    }

    //Interfaz grafica del componente, lo que se vera en pantalla
    return (
        <Container maxWidth="xs"> {/*Coloco el tamaño que tendra*/}
           <div style={style.paper}>  {/*Agrego estilos en linea mediante JSX*/}
                <Avatar style={style.avatar}>  
                    {/*Agrego el icono y los estilos en linea de JSX*/}          
                    <LockOutlinedIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5"> {/*Typography: Formato de titulo, va de H1 a H5 dependiendo del dispositivo*/ }
                    Login de Usuario
                </Typography>
                {/*Creo el formulario*/}  
                <form style={style.form}>
                    {/*TextField: Permite agregar un campo de texto*/}
                    {/*value: Toma el valor el useState y lo muestra en el input*/}
                    {/* onChange: detecta cuando cambia el valor de un elemento de entrada y lanza una funcion.*/}
                    <TextField name="Email" value={usuario.Email} onChange={ingresarValoresMemoria} variant="outlined" label="Ingrese username" fullWidth margin="normal"/>
                    <TextField name="Password" value={usuario.Password} onChange={ingresarValoresMemoria} variant="outlined" type="password"  label="password" fullWidth margin="normal" />
                    <Button type="submit" onClick={loginUsuarioBoton} fullWidth variant="contained" color="primary" style={style.submit}>
                        Enviar
                    </Button>
                </form>

           </div>
       </Container>
    );
};

export default Login;