import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // !!! This will run ONLY when the dependencies change!!!
  //      Arguments: 1. () => {} - function that runs when the dependencies change
  //                 2. []       - an array of dependencies.
  useEffect(() => {
    const storedUserLogInInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLogInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // localStorage is provided by the browser. the first argument
    //  is the key identifier, and the second the value.
    // the key & value can be anything of your choosing.
    // This handler only runs when the button on the login screen is pressed.
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // removes the item from local storage so we don't have to do it manually.
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
