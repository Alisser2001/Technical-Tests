import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import LogIn from "./components/login";
import SignUp from './components/signup';
import Home from './components/home';
import NavBar from './components/navbar';
import { useSelector } from 'react-redux';
import Upload from './components/upload';
import Sales from './components/sales';

function App() {
  const logged = useSelector((state) => state.logged);
  return (
    <Router>
      <div className='container'>
        <NavBar/>
        <Routes>
          <Route path="/" element={logged ? <Home/> : <LogIn />}/>
          <Route path="/login" element={<LogIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/upload/:type" element={<Upload/>}/>
          <Route path="/sales" element={<Sales/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
