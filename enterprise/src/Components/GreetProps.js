import React from 'react'

function GreetProps(props) {
  return (
    <div>
    <h1> hi {props.name} and i am {props.designation}</h1>
    {props.children}
        </div>
  )
}

export default GreetProps