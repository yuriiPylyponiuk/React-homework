import React from 'react';
import Cblock from './c'

function Bblock(props) {

  return (
    <div>
      <Cblock number={props.number}/>
    </div>
  );
}

export default Bblock;