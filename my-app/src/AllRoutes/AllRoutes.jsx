import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home";
import ActiveWear from "../Components/ActiveWear";
import Beauty from "../Components/Beauty";
import Checkout from "../Components/Checkout";
import Designer from "../Components/Designer";
import HolidayDeals from "../Components/HolidayDeals";
import HolidayGifts from "../Components/HolidayGifts";
import Kids from "../Components/Kids";
import Login from "../Components/Login";
import Men from "../Components/Men";
import Payment from "../Components/Payment";
import ProductPage from "../Components/ProductPage";
import Signup from "../Components/Signup";
import Women from "../Components/Women";
import YoungAdult from "../Components/YoungAdult";
import Admin from "../Components/Admin";

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