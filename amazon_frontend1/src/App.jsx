import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import ProductList from './components/productsList/ProductList';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductList />
    </>
  );
}

export default App;
