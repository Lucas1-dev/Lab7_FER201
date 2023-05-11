import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';
import { Route, Routes } from 'react-router';
import Add from './components/add/Add';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import GetAPI from './components/fetch/GetAPI';
import Protected from './components/context/Protected';
import { Navbar } from 'react-materialize';
import ResponsiveAppBar from './components/navbar/Navbar';
import Login from './components/login/Login';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Detail from './components/detail/Detail';
import ModalEdit from './components/detail/ModalEdit';

function App() {
  const [user, setUser] = useState({});
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
    setUser(decoded);
    document.getElementById('buttonDiv').hidden = true;
    localStorage.setItem('user', JSON.stringify(decoded));
  }
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById('buttonDiv').hidden = false;
    localStorage.removeItem('user');
  }
  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "113465169398-dt9aenlps44jgcg75j66jc4sglhiuh3s.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "medium" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div className="App min-h-full">
      <ResponsiveAppBar />
      {/* <div id='buttonDiv'></div>
      {Object.keys(user).length != 0 &&
        <button onClick={handleLogOut}>logout</button>}
      {user &&
        <div>
          <h5>{user.name}</h5>
        </div>
      } */}
      <Routes>
        <Route path='/dashboard' element={<Protected><GetAPI /></Protected>}></Route>
        <Route path='/add' element={<Protected><Add /></Protected>}></Route>
        <Route path='*' element={<Login />}></Route>
        <Route path='/about' element={<Protected><About /></Protected>}></Route>
        <Route path='/news' element={<Protected><News /></Protected>}></Route>
        <Route path='/detail/:id' element={<Protected><Detail /></Protected>}></Route>
        <Route path='/edit' element={<Protected><ModalEdit /></Protected>}></Route>
      </Routes>
      {/* <footer>
        <Protected><Footer /></Protected>
      </footer> */}

    </div>
  );
}

export default App;
