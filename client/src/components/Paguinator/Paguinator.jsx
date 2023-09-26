import React from 'react'
import { useDispatch } from 'react-redux'
import { paginator } from '../../redux/actions/actions'

const Paguinator = () => {

    const dispatch = useDispatch()

    const handlePrevClick = () => {
      dispatch(paginator("prev"));
    }
    
    const handleNextClick = () => {
      dispatch(paginator("next"));
    }

  return (
    <>
        <div>Paguinator</div>
        <button name='prev' onClick={handlePrevClick}>prev</button>
        <span></span>
        <button name='next' onClick={handleNextClick}>next</button>
    </>
  )
}

export default Paguinator