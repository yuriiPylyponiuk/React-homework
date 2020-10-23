import React from 'react';
import Cblock from './c'

function Bblock(props) {
    console.log(props.number);

  return (
    <div>
      <Cblock number={props.number}/>
    </div>
  );
}

export default Bblock;