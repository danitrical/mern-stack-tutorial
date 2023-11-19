import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import ProductList from './components/productsList/ProductList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import { PRODUCTS_DATA, PRODUCTS_DATA_2, PRODUCTS_DATA_3  } from './constants/PRODUCT_DUMP';
// const { y: name, z: age} = x;
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element = {
            <>
              <Header />
              <Slider />
              <ProductList data={PRODUCTS_DATA} isHorzontal />
              <ProductList data={PRODUCTS_DATA_3} />
            </>
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

export default App;
