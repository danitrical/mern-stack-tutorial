import './App.css';
import Header from './components/header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element = {
            <Home />
          }
        />
        <Route
          path='/checkout'
          element = {
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
