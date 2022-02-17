import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/includes/Nav';
import Places from './Components/screens/Places';
import Single from './Components/screens/Single';

function App() {
  return(
    <Router>
      <Helmet>
        <title>Places | Moke Travel</title>
      </Helmet>
      <Nav />
      <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/place/:id" element={<Single />} />
      </Routes>
    </Router>
  )
}

export default App;
