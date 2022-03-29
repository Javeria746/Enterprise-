import React from 'react';

const greetprops = props => {
    console.log(props);
  return (

    <div>
        <h1>hi {props.name} and i am {props.designation}</h1>
    </div>
  );
}

export default greetprops;