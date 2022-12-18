import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedBackItem from './FeedBackItem'

function FeedBackList({ feedback, handleDelete }) {
  console.log(feedback)
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
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
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

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

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedBackList
