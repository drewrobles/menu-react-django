import {useState, useEffect} from 'react'
import { Login } from './components/Login.js'

import { Button } from './components/Button.js'
 
function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  )

  const logoutButtonAction = () => {
    fetch('http://localhost:8000/api/logout/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    setLoggedIn(false)
  }

  const loginButtonAction = (username, password) => {
    fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username': username, 'password': password})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    setLoggedIn(true)
  }

  return (
    <div>
      {loggedIn
        ? <Button action={logoutButtonAction}/>
        : <Login buttonAction={loginButtonAction}/>
      }
    </div>
  );
}

export default App;