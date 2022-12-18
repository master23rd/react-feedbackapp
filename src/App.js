import { v4 as uuidv4 } from 'uuid'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'
// import Card from './components/shared/Card'

function App() {
  const [feedback, setFeedback] = useState(FeedBackData)

  const deleteFeedback = (id) => {
    if (window.confirm('apakah anda yakin akan menghapus?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      //console.log('App', id)
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    //console.log(newFeedback)
  }

  //return with data
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedBackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          />
          <Route path='/about' element={<AboutPage />} />

          {/** params test */}
          <Route path='/post/*' element={<Post />} />
          {/* <Route path='/post/:id/:name' element={<Post />} /> */}

          {/** router-dom v5 (without Routes tag)*/}
          {/* <AboutPage /> */}
          {/* <Route path='/about'>This is about page</Route> */}
          {/* <Route path='/about' component={AboutPage} /> */}
          {/* <Route path='/'>
            <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
          </Route> */}
        </Routes>

        {/** navlink test */}
        {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}
      </div>
    </Router>
  )
}

export default App
