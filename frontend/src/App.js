

import './App.css';
import HomePage from './pages/HomePage';
import {Routes,Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/Contact'
import AdminPage from './pages/AdminPage';
function App() {
  return (
   <Routes>
     <Route path='/' exact Component={HomePage}></Route>
     <Route path='/about' exact Component={AboutPage}></Route>
     <Route path='/signup' exact Component={SignupPage}></Route>
     <Route path='/login' exact Component={LoginPage}></Route>
     <Route path='/contact' exact Component ={ContactPage}></Route>
     <Route path='/admin' exact Component={AdminPage}></Route>
   </Routes>
  );
}

export default App;
