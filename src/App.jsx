
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import User from './Page/User';
import Users from './Page/Users';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

