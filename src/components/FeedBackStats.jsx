import PropTypes from 'prop-types'

function FeedBackStats({ feedback }) {
  //calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')
  console.log(average)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Averange Ratings : {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

FeedBackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedBackStats
