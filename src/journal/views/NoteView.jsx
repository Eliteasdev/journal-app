import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="space-between" sx={{mb:1}}>
      <Typography fontSize={39} fontWeight="light ">28 de agosto, 2023</Typography>
      
      <Grid item>
        <Button color="primary" sx={{p:2}}>
          <SaveOutlined sx={{fontSize:30, mr:1}}/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField type="text" variant="filled" fullWidth placeholder="Ingrese un título" label="Título" sx={{border:"none", mb:1}}/>
      </Grid>

      <Grid container>
        <TextField type="text" variant="filled" fullWidth multiline placeholder="¿Qué sucedio en el día de hoy?" label="Descripción" minRows={5}/>
      </Grid>

      <ImageGalery/>

    </Grid>
  )
}
