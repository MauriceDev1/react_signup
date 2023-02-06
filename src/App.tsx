import React from 'react';
import Access from './layout/Access';
import Signup from './Signup';

function App() {

  const route = "login"

  if(route === 'login'){
    return <Access>
      <Signup />
    </Access>
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
