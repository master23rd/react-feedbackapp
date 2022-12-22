import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'feedback 1',
      rating: 5,
    },
    {
      id: 2,
      text: 'feedback 2',
      rating: 4,
    },
    {
      id: 3,
      text: 'feedback 3',
      rating: 3,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    //console.log(newFeedback)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('apakah anda yakin akan menghapus?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      //console.log('App', id)
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updItem) => {
    console.log(id, updItem)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
