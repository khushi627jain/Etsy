import Deals from "./dealsOfTheDay";
import Discover from "./discover";
import Inspiration from "./inspiration";
import { CommentBox, Order, Rewards, SubscribePart } from "./more";
import Recent from "./recent";
import TodayPicks from "./todayPicks";
import Viewed from "./viewed";


export default function Homepage(){
    return(<>
        <Discover/>
        <Deals/>
        <CommentBox/>
        <Recent/>
        <Order/>
        {/* <Viewed/> */}
        <Inspiration/>
        <SubscribePart/>
       
        <TodayPicks/>
        <Rewards/>
    </>
        
    )
}