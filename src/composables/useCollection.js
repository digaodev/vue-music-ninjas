import { ref } from 'vue'
import { db } from '../services/firebase'

const useCollection = (collection) => {
  const error = ref(null)

  // add a new document
  const addDoc = async (doc) => {
    error.value = null

    try {
      await db.collection(collection).add(doc)
    }
    catch (err) {
      console.log(err.message)
      error.value = 'could not execute the operation'
    }
  }

  return { error, addDoc }

}

export default useCollection