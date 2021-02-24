import { auth } from './firebase'
export const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const logout = () => {
  return auth.signOut()
}

export const resetPassword = (email) => {
  return auth.sendPasswordResetEmail(email)
}

// export const updateEmail = (email) => {
//   return currentUser.updateEmail(email)
// }

// export const updatePassword = (password) => {
//   return currentUser.updatePassword(password)
// }
