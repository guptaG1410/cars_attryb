// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
// import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import BuyNow from './pages/BuyNow';
import Home from './pages/Home';
import Login from './pages/Login';
import AddCar from './pages/AddCar';
import Admin from './pages/Admin';
import UserBookings from './pages/UserBookings';
import EditCar from './pages/EditCar';

function App() {
  // const { isLoading, error } = useAuth0();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/booking/:carId" element={<BuyNow />} />
          <Route path="/userbookings" exact element={<UserBookings />} />
          <Route path="/addcar" exact element={<AddCar />} />
          <Route path="/editcar/:carid" exact element={<EditCar />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
      </BrowserRouter>
      {/* <main className="column">
        <h1>Auth0 Login</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
          </>
        )}
      </main> */}
    </div>
  );
}

export default App;
