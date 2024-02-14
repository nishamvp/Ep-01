import React, { useContext } from 'react'
import userContext from '../utils/userContext'

const Grocery = () => {
  const {name} = useContext(userContext)
  return (
    <h1 className='text-3xl font-bold'>Username: {name}</h1>
    
  )
}

export default Grocery