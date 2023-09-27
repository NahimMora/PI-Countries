import React from 'react'
import Style from './Paguinator.module.css'

import { useDispatch } from 'react-redux'
import { paginator } from '../../redux/actions/actions'

const Paguinator = ({page, maxPage}) => {

    const dispatch = useDispatch()

    const handlePrevClick = () => {
      dispatch(paginator("prev"));
    }
    
    const handleNextClick = () => {
      dispatch(paginator("next"));
    }

  return (
    <>
      <div className={Style.paginator}>
        <button name='prev' onClick={handlePrevClick}>prev</button>
        <span>{page}/{maxPage}</span>
        <button name='next' onClick={handleNextClick}>next</button>
      </div>
    </>
  )
}

export default Paguinator