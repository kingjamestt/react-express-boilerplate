import React, { useEffect, useState } from 'react';

function App() {
  //Initialize state
  const [backendData, setBackendData] = useState([{}]);
  // Fetch backend data 
  useEffect(() => {
    fetch('/api').then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  return (
    <>
      <div>
        {/* check if data is fetched before returning */}
        {(typeof backendData.users === 'undefined') ?
          (<p>loading data...</p>)
          : (
            backendData.users.map((user, i) => {
              return <p key={i}>Hello, {user}</p>
            }))}
      </div>
    </>
  )
}

export default App;
