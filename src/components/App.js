import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CustomSoftware from './CustomSoftware';
import Footer from './ui/Footer';
import Header from './ui/Header';
import LandingPage from './LandingPage';
import Services from './Services';
import theme from './ui/Theme';

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
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/custom-software' element={<CustomSoftware />} />
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
