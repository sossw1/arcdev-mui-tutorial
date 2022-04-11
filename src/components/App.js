import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<div>Home</div>} />
          <Route exact path='/services' element={<div>Services</div>} />
          <Route exact path='/custom-software' element={<div>Custom Software</div>} />
          <Route exact path='/mobile-apps' element={<div>Mobile Apps</div>} />
          <Route exact path='/websites' element={<div>Websites</div>} />
          <Route exact path='/revolution' element={<div>The Revolution</div>} />
          <Route exact path='/about' element={<div>About Us</div>} />
          <Route exact path='/contact' element={<div>Contact Us</div>} />
          <Route exact path='/estimate' element={<div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
