import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import Details from './Pages/Details/Details';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/details" element={
          <RequireAuth><Details></Details></RequireAuth>
        
        }></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
