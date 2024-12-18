import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Service from './components/Service';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import MembershipPlan from './components/MembershipPlan';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import FaqComponent from './components/FaqComponent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path= '/contact' element={<Contact />} />
          <Route path="/plans" element={<MembershipPlan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FaqComponent />} />



          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
       
      </Router>
     
     
    </div>
  );
}

export default App;
