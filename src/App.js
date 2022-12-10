import { useState } from 'react'
import Header from './components/Header'
// import FeedBackItem from './components/FeedBackItem'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)

  //return with data
  return (
    <>
      {/* <Header text={true} /> */}
      {/** backgroundColor : css in jsx */}
      {/* <Header bgColor='red' textColor='blue' /> */}
      <Header />
      <div className='container'>
        {/* <h1>My App</h1> */}
        <FeedBackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
