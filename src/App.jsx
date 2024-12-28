import { Outlet, Route, Routes } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
//import ContactUs from './views/ContactUs';
//import AboutUs from './views/AboutUs';
import ContactUs from './views/Contactus';
import AboutUs from './views/Aboutus';

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
