

import './App.css';
import HomePage from './pages/HomePage';
import {Routes,Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/Contact'
import AdminPage from './pages/AdminPage';
import CoursePage from './pages/CoursePage';
import UserProfilePage from './pages/UserProfilePage';
function App() {
  return (
   <Routes>
     <Route path='/' exact Component={HomePage}></Route>
     <Route path='/about' exact Component={AboutPage}></Route>
     <Route path='/signup' exact Component={SignupPage}></Route>
     <Route path='/login' exact Component={LoginPage}></Route>
     <Route path='/contact' exact Component ={ContactPage}></Route>
     <Route path='/course' exact Component ={CoursePage}></Route>
     <Route path='/user_profile' exact Component={UserProfilePage}></Route>
     <Route path='/admin' exact Component={AdminPage}></Route>
   </Routes>
  );
}

export default App;
