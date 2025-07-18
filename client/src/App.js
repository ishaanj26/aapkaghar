import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/Signin';
import SignUp from './pages/Auth/Signup';
import ResetPassword from './pages/Auth/ResetPassword';
import GoToTop from './components/GoToTop/GoToTop';
import Listing from './pages/Listing/Listing';
import Contact from './pages/Contacts/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';
import PricingPlan from './pages/PricingPlan/PricingPlan';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Agent from './pages/Agent/Agent';
import AgentDetails from './pages/Agent/AgentDetails';
import OurServices from './pages/OurServices/OurServices';
import AIChatBox from './components/AIChatBox/AIChatBox'

import { AppContextProvider } from './context/AppContext';
import DashBoard from './pages/Dashboard/DashBoard';
import UpdateListing from './pages/Dashboard/sidebar/MyProperties/UpdateListing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} /> 
            {/* <Route path="/listing" element={<Listing />} /> */}
            <Route path="/contacts" element={<Contact />} />
           <Route path="/about-us" element={<AboutUs />} />
            <Route path="/FAQs" element={<FAQ />} /> 
            <Route path="/pricing-plans" element={<PricingPlan />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/agents" element={<Agent />} />
            <Route path="/agents/:id" element={<AgentDetails />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/update-listing/:listingId" element={<UpdateListing />} />
            <Route path="/listing/:listingId" element={<Listing />} />
          </Routes>
          {/* <AIChatBox/> */}
          <GoToTop />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
