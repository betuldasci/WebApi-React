import './App.css';
import Header from './Main/Header';
import TopBar from './Main/TopBar';
import Footer from './Main/Footer';
import Home from './pages/Home';
import ShopList from './pages/ShopList';
import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom";
import WishList from './pages/WishList';
import CheckOut from './pages/CheckOut';
import { setProducts } from './Slices/productSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dsasads");
    fetchProducts();
    console.log("eeee");
  }, [])

  const fetchProducts = () => {
    fetch("https://localhost:7237/api/product")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Set the products to state
        dispatch(setProducts(data));

      })
      .catch(error => {
        // Handle any errors here
        console.error('Error fetching products:', error);
      });
  }

  console.log(useSelector((state) => state.products.value));
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/shoplist/:categoryId" element={<ShopList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
