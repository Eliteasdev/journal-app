import { chekingCredentials, login, logout } from '.'
import { registerWithEmailPassword, singInWithGoogle } from '../../firebase/providers'

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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
    const resp = await registerWithEmailPassword({ email, password, displayName })
    console.log(resp)
  }
}
