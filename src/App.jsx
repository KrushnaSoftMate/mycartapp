import ProductList from './pages/ProductList';
import CartTotal from './pages/CartTotal';
import Navbar from './components/Navbar';
import { CartContextProvider } from './store/CartContextProvider.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <CartContextProvider>
      <Router>

        <Navbar />
        <AnimatePresence>
          <Routes>

            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartTotal />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </AnimatePresence>
        <Footer />

      </Router>
    </CartContextProvider>
  )
}

export default App
