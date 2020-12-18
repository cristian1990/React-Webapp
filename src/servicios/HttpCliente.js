
//Importo axios
import axios from 'axios';

//Indicamos el EndPoint base, sobre el que correo el Web Services
axios.defaults.baseURL = 'https://localhost:44331/api';

//Agrego un interceptors, para que todos los reques que salen de axios, incluyan en el Header del Request el Token
axios.interceptors.request.use((config) => {
    
    //Obtengo el Token del localStorage
    const token_seguridad = window.localStorage.getItem('token_seguridad');

    if(token_seguridad){ //Si existe el token
        //Indico que se agregue dentro de la configuracion de Authorization se agregue el token
        config.headers.Authorization = 'Bearer ' + token_seguridad;
        return config;
    }
    //Si hay un error en la configuracion
}, error => {
        return Promise.reject(error);
});

//Creamos un objeto generico que representa los request que envio al servidor
const requestGenerico = {
    get : (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put : (url, body) => axios.put(url, body),
    delete : (url) => axios.delete(url)
};

//Exporto el Request generico
export default requestGenerico;
