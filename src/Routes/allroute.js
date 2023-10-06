import { Route, Routes } from "react-router-dom";
import Gift from "../Gifts/gift";
import Homepage from "../homepage/homepage";
import GiftPage from "../Gifts/giftpage";
import GiftDetails from "../Gifts/giftdetailspage";
import Cart from "../Gifts/cart";
import Wishlist from "../Gifts/wishlist";
import Sorry from "../Gifts/sorry";
import Search from "../Gifts/searchedData";
import { Dashboard } from "../dashboard/dashboard";
import EditAndDelete from "../dashboard/edit&delete";
import NamePlate from "../nameplate/nameplate";
import AllCategory from "../Gifts/category";


export default function AllRouter(){
return(
    <Routes>
        <Route path="/gift" element={<Gift/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/gift/all" element=<GiftPage/> />
        <Route path="/gift/single/:id" element=<GiftDetails/> />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/sorry" element={<Sorry/>} />
        <Route path="/search/:query" element={<Search/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/edit" element={<EditAndDelete/>} />
        <Route path="/nameplate" element={<NamePlate/>} />
        <Route path="/gift/category/:type" element={<AllCategory/>} />
    </Routes>
) 
}