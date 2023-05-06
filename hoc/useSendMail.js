import { useState } from 'react'
import axios from 'axios'
import useShowAlert from './useShowAlert'

const useSendMail = () => {
  const [progress, setProgress] = useState('idle')
  const { showAlert } = useShowAlert()
  
  const sendMail = async (e, path, body) => {
    e.preventDefault()
    setProgress('Sending...')
    try {
      const { data } = await axios.post(path, body)
      const { success, message } = data
      if (success) {
        setProgress('Sent')
        showAlert(message)
        const toggleProgressTimer = setTimeout(() => {
          setProgress('Send')
          clearTimeout(toggleProgressTimer)
        }, 2000)
      }
    } catch (error) {
      showAlert('Error while sending mail!')
      setProgress('idle')
    }
  }

  return { progress, sendMail }
}

export default useSendMail;