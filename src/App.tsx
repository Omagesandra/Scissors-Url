import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { UserProvider } from './contexts';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyLinks from './Pages/Dashboard/MyLinks/MyLinks';
import NewLink from './Pages/Dashboard/NewLink/NewLink';




function App () {
  return (
    <>
    <UserProvider>
    <BrowserRouter>
    
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/dashboard/my-links' element={<MyLinks customUrl="string" shortUrl="string" longUrl='string'/>} />
          <Route path='/dashboard/new-link' element={<NewLink/>} />
        </Route>
      </Routes>
    
      </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
