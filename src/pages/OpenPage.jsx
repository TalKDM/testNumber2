import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenPage = () => {

    const nav = useNavigate();
  return (
    <div>
        <h1>WILLING</h1> <br />
        <button onClick={() => nav('/find')}>Find Volunteering</button>
        <button onClick={() => nav('/add')}>Add Volunteering</button>
    </div>
  )
}

export default OpenPage