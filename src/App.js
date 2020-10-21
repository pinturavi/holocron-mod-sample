import React, { Suspense, useState } from 'react';
// import UserProfile from './UserProfile'
const UserProfile = React.lazy(() => import('./UserProfile.js'));


function App() {
  const [showProfile, setProfile] = useState(false)

  return (
    <div className="App">

      {
        showProfile ? <Suspense fallback={<div>Loading</div>}><UserProfile/> </Suspense> : null
      }
      <button id='btn-id' onClick={() => setProfile(!showProfile)}>click me</button>
    </div>
  );
}

export default App;
