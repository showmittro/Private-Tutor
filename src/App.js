import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Login from './Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import Details from './Pages/Details/Details';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/details" element={
          <RequireAuth><Details></Details></RequireAuth>
        
        }></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
