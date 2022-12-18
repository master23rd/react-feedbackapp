import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom'

function Post() {
  const status = 200
  const navigate = useNavigate()
  //   const params = useParams()

  if (status === 400) {
    return <Navigate to='/notfound' />
  }

  const onClick = () => {
    console.log('testing onclick navigate')
    navigate('/post/show')
  }

  return (
    // <div>
    //   <h1>Post :{params.id} </h1>
    //   <p>name : {params.name} </p>
    //   <button onClick={onClick}> Click </button>
    // </div>

    <div>
      <h1>POST</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>hello world</h1>} />
      </Routes>
    </div>
  )
}

export default Post
