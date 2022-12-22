import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
} from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'
// import Card from './components/shared/Card'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  //return with data
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedBackStats />
                  <FeedBackList />
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
    </FeedbackProvider>
  )
}

export default App
