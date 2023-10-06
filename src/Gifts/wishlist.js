import { Box, Button, Flex, Grid, GridItem ,Image,Text,Heading, Wrap, WrapItem} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {BsChatSquareHeartFill} from "react-icons/bs"
import {BsArrowUpRightCircleFill} from "react-icons/bs"
import {AiFillDelete} from "react-icons/ai"



export default function Wishlist(){

    const [wishlistArr,setwishlistArr]=useState([])
    const[usersData,setUsersData]=useState([]);
    const[change,setChange]=useState(false)
    const navigate=useNavigate();
    const token =localStorage.getItem("token")

    
useEffect(()=>{
if(token){
    axios
    .get("https://meghkhush-creation-e6ai.onrender.com/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => { 
      setwishlistArr(res.data.data.wishlist)
      setUsersData(res.data.data);
    })
}
   else{
    alert("Login please for adding any product to wishlist")
    navigate("/")
   }


},[change])


function removeGift(giftId){
const userId=usersData._id;
 let wishlist=wishlistArr.filter((ele,idx)=>{
    if(ele._id!=giftId) return ele;
 })
setwishlistArr(wishlist)

    axios.patch(`https://meghkhush-creation-e6ai.onrender.com/user/remove/wishlist/${userId}`,wishlist,{
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch(err=>console.log(err))
     setChange(true);
}
    return(
<Box>
        {
            wishlistArr.length==0?<Heading>OOPS !! No item in wishlist</Heading>: <Box>

            <Text textAlign={"center"} gap={"10px"} justifyContent={"center"} alignItems={"center"} mb="3%" display={"flex"} mt="2%" fontFamily={"cursive"} fontWeight={["500","1000"]} fontSize={"4xl"}>Your Wishlist products<span><BsChatSquareHeartFill /></span></Text>
        
         <Grid p="20px" gap={"10px"} gridTemplateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}  >
        {
            wishlistArr.map((ele,idx)=>{
              const percentageDiscount = ((ele.realPrice - ele.price) / ele.realPrice) * 100;
                return(
                    <GridItem   h={["350px","450px","","500px","550px"]}
                    boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} 
                    textAlign={"left"} key={idx} borderRadius={"10px"} 
                   
                       >
                            <Image 
                                h={["65%","70%"]} 
                             borderRadius={"10px 10px 0px 0px"}  src={ele.image[0]} />
                      <Box p="10px">
                      <Box  w={["150px","200px","200px","250px"]}> 
  <Text
    textOverflow="ellipsis"
    whiteSpace="nowrap"
    overflow="hidden"
    fontWeight="500"
    fontSize="md"
    
  >
    {ele.title}
  </Text>
 
</Box>
                  
<Flex alignItems={"center"} gap={["3px","10px"]}>
<Text fontWeight={"600"} fontSize={["sm","medium"]} color={"gray.500"}>{`₹ ${ele.price}`}</Text>
<Text fontWeight={"600"} fontSize={["small","sm"]} textDecoration={"line-through"} color={"#fa4a65"}>{`₹ ${ele.realPrice}`}</Text>
<Text fontWeight={"600"}  fontSize={["small","sm"]}  color={"#fa4a65"}>({percentageDiscount.toFixed(0)}% off)</Text>
</Flex>
<Text fontWeight={"600"} fontSize={["10px","sm"]}  color={"gray.500"}>(Delivery Charges extra)</Text>

                        <Flex display={["none","none","flex"]} mt="3%" gap="10px">
                           
                            <Button onClick={()=>{navigate(`/gift/single/${ele._id}`)}} _hover={{bg:"white",color:"pink.500"}} bg="pink.50">Details</Button>
                      <Wrap>
                        <WrapItem>
                            <Button  _hover={{bg:"white",color:"pink.500"}} bg="pink.50" onClick={()=>removeGift(ele._id,idx)} >Remove</Button>
                        </WrapItem>
                      </Wrap>
                      <Button onClick={()=>{navigate(`/sorry`)}} _hover={{bg:"white",color:"pink.500"}} bg="pink.50">Buy Now</Button>
                        </Flex>

                        <Flex mt={"3%"} gap={"10px"} display={["flex","flex","none"]}>
                        <button style={{padding:"5px",borderRadius:"50%",backgroundColor:"#8b8b8b"}}  onClick={()=>{navigate(`/gift/single/${ele._id}`)}} bg="white"><BsArrowUpRightCircleFill  /></button>
                        <button style={{padding:"0 10px",borderRadius:"5px",backgroundColor:"#8b8b8b"}}  onClick={()=>{navigate(`/sorry`)}} bg="white"><Text>BUY</Text></button>
                          <button style={{padding:"5px",borderRadius:"50%",backgroundColor:"#8b8b8b"}} bg="white" onClick={()=>removeGift(ele._id,idx)}  ><AiFillDelete /></button>
                        </Flex>
                      </Box>
                       
                       
                    </GridItem>
                )
            })
        }
    </Grid>

            </Box>
        }
        </Box>
    )
}