import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import MyPortfolio from "./routes/MyPortfolio";
import MyPortfolioDetails from './routes/MyPortfolioDetails';
import Services from "./routes/Services";
import ServicesDetails from "./routes/ServicesDetails";
import BlogGrid from "./routes/BlogGrid";
import BlogList from "./routes/BlogList";
import BlogDetails from "./routes/BlogDetails";
import ContactMe from "./routes/ContactMe";
import Cursor from "./components/Cursor";
import Preloader from './components/Preloader'; 

const App = () => {
  
  return (
    <>
      <Cursor/> 
      <Preloader/> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
          <Route path="/myportfolioDetails" element={<MyPortfolioDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/serviceDetails" element={<ServicesDetails />} />
          <Route path="/blogGrid" element={<BlogGrid />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contactUs" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
