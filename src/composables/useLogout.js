import { ref } from 'vue'
import { auth } from '../services/firebase'

// refs
const error = ref(null)
const isPending = ref(false)

// logout function
const logout = async () => {
  error.value = null
  isPending.value = true

  try {
    await auth.signOut()
    isPending.value = false
  }
  catch (err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useLogout = () => {
  return { error, logout, isPending }
}

export default useLogout