import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import Spinner from './shared/Spinner'
import FeedBackItem from './FeedBackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  console.log(feedback)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem
              key={item.id}
              item={item}
              //   handleDelete={(id) => console.log(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div
  //           key={item.id}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //         >
  //           <FeedBackItem
  //             key={item.id}
  //             item={item}
  //             //   handleDelete={(id) => console.log(id)}
  //           />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // )

  // return (
  //   <div className='feedback-list'>
  //       {feedback.map((item) => (
  //         <FeedBackItem
  //           key={item.id}
  //           item={item}
  //           //   handleDelete={(id) => console.log(id)}
  //           handleDelete={handleDelete}
  //         />
  //       ))}
  //   </div>
  // )
}

export default FeedBackList
