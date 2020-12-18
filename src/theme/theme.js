
//Importamos Material-UI
import { createMuiTheme } from '@material-ui/core/styles';

//Creamos una funcion para encapsular los colores que queremos que tenga la App
const theme = createMuiTheme({ //Funcion de Material UI
    palette : {
        primary : {
            light : "#63a4fff", //Cuando paso el mouse sobre un boton
            main : "#1976d2", //Color principal
            dark : "#004ba0", 
            contrastText : "#ecfad8" //Color texto
        }           
    },
});

//Exportamos la funcion, para que pueda ser utilizada por otros archivos del proyecto
export default theme;