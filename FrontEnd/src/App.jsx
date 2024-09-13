import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Loader from './components/Loader';
import { ModeContext } from './components/ModeContext';
import Admin from './pages/Admin/Admin';

const App = () => {
  const { portfolioData } = useContext(ModeContext);
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (portfolioData) {
        setLoading(false)
        console.log(portfolioData)
    }
}, [portfolioData]);

  return (
    <div>
      {loading ? <Loader />
       :
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
}
    </div>
  );
}

export default App;
