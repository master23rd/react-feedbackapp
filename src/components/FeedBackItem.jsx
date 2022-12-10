// import { useState } from 'react'
import Card from './shared/Card'

function FeedBackItem({ item }) {
  {
    /** set hooks using useState
     * rating > state data, setRating > counter state */
  }
  //   const [rating, setRating] = useState(7)
  //   const [text, setText] = useState('This is an example of a feedback item')
  //   const handleClick = () => {
  //     //we can direct set rating, should use counter state
  //     //setRating(10)
  //     setRating((prev) => {
  //       return prev + 1
  //     })
  //   }

  return (
    <div className='card'>
      {/** num display will maintenance by hooks */}
      {/* <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click</button> */}
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>Cli ck</button> */}
    </div>
  )
}

export default FeedBackItem
