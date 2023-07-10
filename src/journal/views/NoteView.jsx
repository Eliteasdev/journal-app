import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DeleteOutline, SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from '../../hooks/useForm'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeletingNote, startSaveNote } from '../../store/journal/thunks'
import { formatDateEsp } from '../../helpers'

export const NoteView = () => {
  const dispatch = useDispatch()

  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    const dateFormat = formatDateEsp(newDate)
    // return newDate.toUTCString()
    return dateFormat
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  return (
    <Grid container
    direction="row"
    alignItems="center"
    justifyContent="space-between" sx={{ mb: 1 }}
    className='animate__animated animate__fadeIn animate__faster'>
      <Typography fontSize={39} fontWeight="light ">{dateString}</Typography>

      <Grid item>
        <Button
          disabled={isSaving}
          onClick={ onSaveNote}
          color="primary"
          sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedio en el día de hoy?"
          label="Descripción"
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
          />
      </Grid>

      <Grid container justifyContent='end'>
        <Button
          onClick={onDelete}
          sx={{ mt: 2 }}
          color='error'
        >
          <DeleteOutline/>
          Borrar
        </Button>
      </Grid>

    </Grid>
  )
}
