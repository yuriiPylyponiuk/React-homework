import React from 'react';
import Bblock from './b';


function Ablock() {

  return (
    <div>
      <Bblock number={Math.random().toFixed(7)}/>
    </div>
  );
}


export default Ablock;