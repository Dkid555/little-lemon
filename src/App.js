import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {Link, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Base from "./pages/Base";
import BookingPage from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
        <Header/>
        {/*<Routes>*/}
        {/*    <Route path='/' element={}></Route>*/}
        {/*</Routes>*/}
        <Routes>
            <Route path='/' element={<Base/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path = '/booking' element={<BookingPage/>}></Route>
            <Route path='/confirmed' element={<Confirmation/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
         <Footer/>
    </div>
  );
}

export default App;
