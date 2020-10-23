import React from 'react';
import Bblock from './b';


function Ablock() {
  let a = Math.random()*10;
  return (
    <div>
      <Bblock number={a}/>
    </div>
  );
}


export default Ablock;