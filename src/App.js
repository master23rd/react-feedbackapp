import Header from './components/Header'

function App() {
  //return with data
  return (
    <>
      {/* <Header text={true} /> */}
      {/** backgroundColor : css in jsx */}
      {/* <Header bgColor='red' textColor='blue' /> */}
      <Header />
      <div className='container'>
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
