import ProductList from './components/ProductList';
import CartTotal from './components/CartTotal';
import { CartContextProvider } from './store/CartContextProvider.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartTotal />} />
        </Routes>
      </Router>
    </CartContextProvider>
  )
}

export default App
