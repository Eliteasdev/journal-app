import {Link as RouterLink} from "react-router-dom";
import Google from "@mui/icons-material/Google"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLaout } from "../layout/AuthLaout";

export const RegisterPage = () => {
  return (
    <AuthLaout title="Registro">
      <form action="">
          <Grid container>

          <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Nombre completo" type="texto" placeholder="Nombre Apellido" fullWidth />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Contraseña" type="password" placeholder="contraseña" fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  ingresar
                </Link>
              </Grid>

            </Grid>

          </Grid>
        </form>
    </AuthLaout>
  )
}
