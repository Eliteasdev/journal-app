import { chekingCredentials, login, logout } from '.'
import { logOutFirebase, loginWithEmailPassword, registerWithEmailPassword, singInWithGoogle } from '../../firebase/providers'

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
    const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword({ email, password, displayName })
    if (!ok) return dispatch(logout({ errorMessage }))
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(chekingCredentials())

    const result = await loginWithEmailPassword({ email, password })
    console.log(result)

    if (!result.ok) return dispatch(logout(result))
    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logOutFirebase()

    dispatch(logout())
  }
}
