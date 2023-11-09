import React from 'react'
import Reg from './component/Reg';

const App = () => {
  const newDate = new Date().toUTCString();
  // const newTime = new Date().getTime();
  console.log(newDate);
  return (
    <div>
    {newDate}
    <Reg/>
    </div>
  )
}

export default App