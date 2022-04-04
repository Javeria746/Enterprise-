import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import Users from './Users';
import Userdetails from './Userdetails';
import Admin from './components/Admin';



function App() {
  return (
    <>
    <Navbar />
    <Routes>

<Route path = '/' element = {<Home/>}></Route>
<Route path = 'about' element = {<About/>}></Route>
<Route path = 'order-summary' element = {<OrderSummary/>}></Route>
<Route path = 'products' element = {<Products/>}>
  <Route index element = {<Featured />}/>
  <Route path = 'featured' element = {<Featured/>}/>
  <Route path = 'new' element = {<New />}/>
</Route>
<Route path = '*' element = {<NoMatch/>}></Route>
<Route path = 'users' element = {<Users/>}>
  <Route path = ':userId' element = {<Userdetails />} />
  <Route path = 'admin' element = {<Admin />} />
</Route>
</Routes>
    </>
   
  );
}

export default App;
