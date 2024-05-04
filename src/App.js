import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/responsive.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import ProductCategories from './pages/ProductCategories';
import CategoryBeauty from './pages/categories/Beauty';

export const SkeletonLoading = () => {
  return (
      <div className="skeleton-loading flex flex-wrap">
          <div className="skeleton-row p-2">
              <div className="skeleton-circle mt-2"></div>
              <div className="skeleton-text mt-2"></div>
          </div>
          <div className="skeleton-row p-2">
              <div className="skeleton-circle mt-2"></div>
              <div className="skeleton-text mt-2"></div>
          </div>
          <div className="skeleton-row p-2">
              <div className="skeleton-circle mt-2"></div>
              <div className="skeleton-text mt-2"></div>
          </div>
          <div className="skeleton-row p-2">
              <div className="skeleton-circle mt-2"></div>
              <div className="skeleton-text mt-2"></div>
          </div>
          <div className="skeleton-row p-2">
              <div className="skeleton-circle mt-2"></div>
              <div className="skeleton-text mt-2"></div>
          </div>
          <div className="skeleton-row p-2">
              <div className="skeleton-circle mt-2"></div>
              <div className="skeleton-text mt-2"></div>
          </div>
      </div>
  );
};

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          //Menu Route
           <Route exact path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/product-categories" element={<ProductCategories />} />
            //Product Categories Route
            <Route path='/product-categories/beauty' element={<CategoryBeauty/>} />
              //Product Subcategories Route
              <Route path='/product-categories/beauty/lipstick' element={<></>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
