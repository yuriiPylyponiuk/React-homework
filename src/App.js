import React from 'react';
import Ablock from './components/a';
import Bblock from './components/b';
import Cblock from './components/c';
import InputUser from './components/inputBlock';

function App(props) {
  return (
    <div className="App">
          <InputUser />
          <Ablock/>
    </div>
  );
}

export default App;
