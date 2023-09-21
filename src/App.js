// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home'
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs';
import WebsiteDesign from './components/website-design/WebsiteDesign';
import WebsiteDevelopment from './components/website-development/WebsiteDevelopment';
import Seo from './components/seo/Seo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />


    {/* Routes */}
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about-us' exact element={<AboutUs />} />
      <Route path='/website-design' exact element={<WebsiteDesign />} />
      <Route path='/website-development' exact element={<WebsiteDevelopment />} />
      <Route path='/seo' exact element={<Seo />} />
      <Route path='/contact-us' exact element={<ContactUs />} />
    </Routes>


    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
