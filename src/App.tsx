import React from 'react';
import Access from './layout/Access';

function App() {

  const route = "login"

  if(route === 'login'){
    return <Access>Test</Access>
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
