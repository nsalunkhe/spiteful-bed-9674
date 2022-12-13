import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import ActiveWear from "../Components/Home/ActiveWear";
import Beauty from "../Components/Home/Beauty";
import Checkout from "../Pages/Checkout";
import Designer from "../Components/Home/Designer";
import HolidayDeals from "../Components/Home/HolidayDeals";
import HolidayGifts from "../Components/Home/HolidayGifts";
import Kids from "../Components/Home/Kids";
import Login from "../Pages/Login";
import Men from "../Components/Home/Men";
import Payment from "../Pages/Payment";
import ProductPage from "../Pages/ProductPage";
import Signup from "../Pages/Signup";
import Women from "../Components/Home/Women";
import YoungAdult from "../Components/Home/YoungAdult";
import Admin from "../Pages/Admin";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ActiveWear" element={<ActiveWear/>}></Route>
            <Route path="/Beauty" element={<Beauty/>}></Route>
            <Route path="/Checkout" element={<Checkout/>}></Route>
            <Route path="/Designer" element={<Designer/>}></Route>
            <Route path="/HolidayDeals" element={<HolidayDeals/>}></Route>
            <Route path="/HolidayGifts" element={<HolidayGifts/>}></Route>
            <Route path="/Kids" element={<Kids/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Men" element={<Men/>}></Route>
            <Route path="/Payment" element={<Payment/>}></Route>
            <Route path="/ProductPage" element={<ProductPage/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Women" element={<Women/>}></Route>
            <Route path="/YoungAdult" element={<YoungAdult/>}></Route>
            <Route path="/Admin" element={<Admin/>}></Route>
        </Routes>
    )
}