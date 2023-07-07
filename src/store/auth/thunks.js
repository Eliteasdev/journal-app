import { chekingCredentials, login, logout } from '.'
import { singInWithGoogle } from '../../firebase/providers'

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
    const result = await singInWithGoogle()
    console.log({ result })
    console.log(result.ok)
    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}
