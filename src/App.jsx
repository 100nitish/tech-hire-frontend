import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import MainBanner from './components/Banner/MainBanner';
import Footer from './components/Footer/Footer';
import TeacherRegForm from './components/RegistrationForm/TeacherRegForm';
import StudentRegForm from './components/RegistrationForm/StudentRegForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainBanner />} />
          <Route path="/teacher-registration" element={<TeacherRegForm />} />
          <Route path="/student-registration" element={<StudentRegForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
