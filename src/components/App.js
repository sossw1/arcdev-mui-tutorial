import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';

function App() {
  const [value, setValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedMenuIndex={selectedMenuIndex}
          setSelectedMenuIndex={setSelectedMenuIndex}
        />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/services' element={<div>Services</div>} />
          <Route exact path='/custom-software' element={<div>Custom Software</div>} />
          <Route exact path='/mobile-apps' element={<div>Mobile Apps</div>} />
          <Route exact path='/websites' element={<div>Websites</div>} />
          <Route exact path='/revolution' element={<div>The Revolution</div>} />
          <Route exact path='/about' element={<div>About Us</div>} />
          <Route exact path='/contact' element={<div>Contact Us</div>} />
          <Route exact path='/estimate' element={<div>Estimate</div>} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedMenuIndex={selectedMenuIndex}
          setSelectedMenuIndex={setSelectedMenuIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
