import React from 'react'
import {useParams} from 'react-router-dom'

function Userdetails() {
    const params = useParams()
    const userId = params.userId
  return (
    <div>Userdetails about user {userId} here</div>
  )
}

export default Userdetails