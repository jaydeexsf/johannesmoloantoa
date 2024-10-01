import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Loader from './components/Loader';

const App = () => {
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []); 

  // useEffect(() => {
  //   if (portfolioData) {
  //       setLoading(false)
  //       console.log(portfolioData)
  //   }
// }, [portfolioData]);

  return (
    <div>
      {loading ? <Loader />
       :
      <Router>
        <Routes>
          <Route path='/johannesmoloantoa' element={<Home />} />
        </Routes>
      </Router>
}
    </div>
  );
}

export default App;
