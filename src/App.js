
import './App.css';

import Head from './components/Head/Head';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Steps from './components/Steps/Steps';
import Questions from './components/Questions/Questions';
import Review from './components/Review/Review';
import Gallery from './components/Gallery/Gallery';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import FormData from './components/Form/FormData/FormData';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div className='App'>
        <Head />
        <Routes>
          <Route path='/formdata' element={<FormData />} />
        </Routes>
        <About />
        <Programs />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <Form />
      </div>

      <Footer />
    </div>
  );
}




