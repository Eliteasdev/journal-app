export const formatDateEsp = (date) => {
  const opciones = { day: 'numeric', month: 'short', year: 'numeric' }
  const formatoFecha = new Intl.DateTimeFormat('es-ES', opciones)
  const fechaFormateada = formatoFecha.format(date)

  return fechaFormateada
}
