function App() {
  const title = 'Blog Post'
  const body = 'This is my blog'
  const comments = [
    { id: 1, text: 'testing' },
    { id: 2, text: 'testing 2' },
  ]

  //return simple
  //return <h1>Hello From the app Component</h1>

  const loading = false
  const showComment = false

  if (loading) return <h1>Loading..</h1>

  const commentBlock = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )

  //return with data
  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComment && commentBlock}
      {/* {showComment ? 'yes' : 'no'} */}
      {/* {showComment ? commentBlock : null} */}
    </div>
  )

  //return with more component
  //   return (
  //     <div className='container'>
  //       <h1>My App</h1>
  //       <p>Hello</p>
  //     </div>
  //   )
}

export default App
