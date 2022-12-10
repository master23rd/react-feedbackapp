import FeedBackItem from './FeedBackItem'

function FeedBackList({ feedback }) {
  console.log(feedback)
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        // <div>{item.rating}</div>
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedBackList
