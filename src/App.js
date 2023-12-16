import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import ListClients from './components/ListClients';
import AddClient  from './components/AddClient';
import EditClient  from './components/EditClient';
import Menu from './Menu';
import { CartProvider } from "use-shopping-cart";
import ListCards from './components/clientSide/ListCards';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from "./components/clientSide/Cart"
import PdfCart from "./components/clientSide/PdfCart";
import Loginclient from './components/authentificationClient/loginClient';
import Signup from "./components/authentificationClient/Signup";
function App() {
  return(<>
  
    <CartProvider>
    
    {/*<ListArticles />*/}
     <Router>
      <Menu/>
      <Routes> 
          <Route path='/' element={<ListCards/>}/>
        <Route path='/articles' element={<ListArticles/>}/>
        <Route path='/AddArticle' element={<AddArticle/>}/>
        <Route path='/editArticle/:id' element={<EditArticle/>}/> 
      
         <Route path='/cart' element={<Cart/>}/>
         <Route path="/loginclient" exact element={<Loginclient/>}/>
         <Route path="/signup" exact element={<Signup/>}/>
         <Route path='/pdfCart' element={<PdfCart/>}/>
    {/*<ListClient />*/}
       <Route path='/clients' element={<ListClients/>}/>
        <Route path='/AddClient' element={<AddClient/>}/>
        <Route path='/editClient/:id' element={<EditClient/>}/>
        
       
        

      </Routes>
      </Router>
    
    </CartProvider></>
  );

}
export default App;
