
import React from 'react';
import { ThemeProvider as MuithemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import Login from "./componentes/seguridad/Login";
import PerfilUsuario from './componentes/seguridad/PerfilUsuario';
//Router: Enrutador
//Switch: Dirige y direcciona a que componente nos dirigimos
//Route: Ruta del componente que se va a cargar
//BrowserRouter: lo represento como Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import AppNavbar from './componentes/navegacion/AppNavbar';

//Esto es un componente en React
function App() {
  return(

    //Configuro el React Router para hacer la "navegacion" entre distintos componentes
    <Router>
       {/* Le paso un prop al componente MuithemeProvider */}
      <MuithemeProvider theme={theme}>
          <AppNavbar /> {/* Agrego el componente de Navegacion */}
          <Grid container>  {/* Grilla de tipo componente, para el formulario */}
            {/* Dentro del Switch, ponemos las rutas a las cuales va a tener acceso la app */}
            <Switch>
                {/* exact:Ruta exacta | path:Url personalizada | component:componente al que llamo mediante el path*/}
                {/* http://localhost:3000/auth/login */}
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/registrar" component={RegistrarUsuario} />
                <Route exact path="/auth/perfil" component={PerfilUsuario} />
                {/* Pagina por defecto que va a cargar */}
                <Route exact path="/" component={PerfilUsuario} />
            </Switch>
          </Grid>
      </MuithemeProvider>
    </Router>
  )
}

//Exporto el componente para que otros puedean tener acceso a el
export default App;
