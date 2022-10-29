import Home from './Home';
import Navigate from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import About from '../components/about/About';
import CourseDetail from '../components/about/CourseDetail';
import Login from '../components/auth/Login';

import { Routes, Route } from 'react-router-dom';


function Main() {
  return (
    <div>
      <Navigate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:course_id' element={<CourseDetail />} />
        <Route path='/user-login' element={<Login />} />
        <Route path='/user-register' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;