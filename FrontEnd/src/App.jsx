// import { useState } from 'react'
// import './App.css'
// import Header from './components/Header'
// import Home from './pages/Home/Home'

// function App() {
//   const [loading, setLoading] = useState(true);

//   l
//   return (
//   <div className='text-white'>
//     <Home />
//   </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Loader from './components/Loader';

const App = () => {

  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading ? <Loader />
       :
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
}
    </div>
  );
}

export default App;
