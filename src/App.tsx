import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import PublicRoute from './routes/PublicRoute'

import styles from './App.module.scss'

function App() {

  return (
    <div className={`${styles['App']}`}>
      <div className={`${styles['profileContainer']}`}>
        <Profile />
      </div>

      <div className={`${styles['Layout']}`}>
        <div className={`${styles['navbarContainer']}`}>
          <NavBar/>
        </div>
        <div className={`${styles['pagesContainer']}`}>
          <PublicRoute/>
        </div>
      </div>

    </div>
  );
}

export default App;
