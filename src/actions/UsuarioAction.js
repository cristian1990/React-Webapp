//Importo axios
import axios from 'axios';
//Importo ela rchivo de Request generico
import HttpCliente from "../servicios/HttpCliente";

//==== No necesito enviar el token desde los metodos porque eso lo configure en HttpCliente ====

//Funcion para registrar un usuario 
export const registrarUsuario = (usuario) => {
    //Creo una promesa (Asincrono) para hacer el request
    return new Promise((resolve, eject) => {
        //Completo la URI del EndPoint y la data del usuario a registrar
        HttpCliente.post("/usuario/registrar", usuario)
          .then((response) => { //response: Tendra la respuesta del servidor
            resolve(response);
      });
    });
};

//Funcion para obtener la data del usuario actual logueado en la App
export const obtenerUsuarioActual = (dispatch) => {
    //Creo una promesa (Asincrono) para hacer el request
    return new Promise((resolve, eject) => {
        //Completo la URI del EndPoint y obtengo el response (data del usuario)
        HttpCliente.get("/usuario")
          .then((response) => { //response: Tendra la respuesta del servidor 
            console.log('response', response); //Imprimo el response en consola  
            resolve(response); //Devuelvo el response
        })
    })
}

//Funcion para actualizar data del usuario actual logueado en la App
export const actualizarUsuario = (usuario, dispatch) => {
    //Creo una promesa (Asincrono) para hacer el request
    return new Promise((resolve, eject) => {
      //Completo la URI del EndPoint y le envio el objeto usuario
      HttpCliente.put("/usuario", usuario)
        .then(response => { //response: Tendra la respuesta del servidor
          resolve(response); //Si no hubo errores, devuelvo el response
        })
    })
}

//Funcion de login
export const loginUsuario = (usuario) => {
  //Creo una promesa (Asincrono) para hacer el request
  return new Promise((resolve, eject) => {
    //Completo la URI del EndPoint y le envio el objeto usuario
    HttpCliente.post("/usuario/login", usuario)
      .then(response => { //response: Tendra la respuesta del servidor
        resolve(response); //Si no hubo errores, devuelvo el response
      })
    })
}