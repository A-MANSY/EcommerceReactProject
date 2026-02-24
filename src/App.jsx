import { Routes, Route } from "react-router-dom";
import CategroyProvider from "./Contexts/CategroyContext/CategroyProvider"
import HomePage from './Pages/HomePage/HomePage'
import LayoutPage from "./Pages/LayoutPage/LayoutPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import ProductPage from "./Pages/ProductPage/ProductPage";
import CardPage from "./Pages/CardPage/CardPage";
import CartProvider from "./Contexts/CartContext/Cart";
import Favorite from "./Pages/Favorite/Favorite";
import CategoryPage from "./Pages/Category/Categroy";
function App() {

  return (
    <CategroyProvider>
      <CartProvider>
      <Routes>
        <Route path="/" element={<LayoutPage/>}> 
        <Route index element={<HomePage/>}/> 
        <Route path="aboutPage" element={<AboutPage/>}/> 
        <Route path="blog" element={<BlogPage/>}/> 
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="card" element={<CardPage/>}/>
        <Route path="favorite" element={<Favorite/>}/>
        <Route path="category/:categoryName" element={<CategoryPage/>}/>
        </Route>   
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </CartProvider>
    </CategroyProvider>
  )
}

export default App
