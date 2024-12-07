import { useState } from 'react'

function Square( {buttonClicked, value} ) {
  return <>
    <button style={{
        width: '100px', // set the desired width
        height: '100px', // set the desired height
        fontSize: '24px', // adjust font size if necessary
      }}
      onClick= {buttonClicked}>
     {value}
    </button>
  </>
}

export default Square
