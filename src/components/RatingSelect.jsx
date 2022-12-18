import { useState } from 'react'

function RatingSelect({ select }) {
  const [selected, setSeletected] = useState(10)

  const handleChange = (e) => {
    //console.log(typeof +e.currentTarget.value)
    setSeletected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  //   return <div>RatingSelect</div>
  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
    </ul>
  )
}

export default RatingSelect
