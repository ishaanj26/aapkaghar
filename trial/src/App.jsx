import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import { AppContextProvider } from './context/AppContext';
import CreateListing from './pages/CreateListing';

export default function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}