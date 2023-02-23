
import './App.css';
import Header from './Components/Header-section/Header';
import Banner from './Components/Banner/Banner';
import HomepageContent from './HomepageContent/HomepageContent';
import Footer from './Components/Footer/Footer'
import AboutUsContent from './AboutUs/AboutUsContent';
import Services from './Services/Services';
import ContactUs from './ContactUs/ContactUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
      <div className='header-banner-section'>
        <div className='banner_img'>
          <img src={process.env.PUBLIC_URL + '/banner.jpeg'}></img>
        </div>
        <div className='header-banner'>
          <Header></Header>
          <Banner></Banner>
        </div>
      </div>
          <Routes>
            <Route path='/' element={<HomepageContent />}></Route>
            <Route path='/About-Us' element={<AboutUsContent />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/contact-Us' element={<ContactUs />}></Route>
            <Route path='*' element={<>Page not found</>}></Route>
          </Routes>
      
      <div>
        <Footer></Footer>
      </div>
      </Router>
    </div>
  );
}

export default App;

