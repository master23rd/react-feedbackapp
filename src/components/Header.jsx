import PropTypes from 'prop-types'

// function Header(props) {
//direct props
function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    // <header style={{ backgroundColor: 'blue', color: 'red' }}>
    <header style={headerStyle}>
      <div className='container'>
        {/* <h2>{props.text}</h2> */}
        <h2>{text}</h2>
        {/* <h3>Feedback UI</h3> */}
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

// type props default - static type
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
