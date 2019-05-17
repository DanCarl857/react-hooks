import React, { useState } from 'react';

const App = () => {

  const [activated, setActivated] = useState(false)
  const buttonText = activated ? 'Activated' : 'Inactive'

  return (
    <button onClick={() => setActivated(!activated)}>
      { buttonText }
    </button>
  )
}

export default App;
