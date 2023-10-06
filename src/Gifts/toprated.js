
import { Box, Button, Center, Flex, Grid, GridItem ,Image,Text, Wrap, WrapItem, useToast} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {GrCart} from "react-icons/gr"

export default function TopRated(){
const [arr,setArr]=useState([])
const navigate=useNavigate();
const toast = useToast() 

useEffect(()=>{
    axios.get("https://meghkhush-creation-e6ai.onrender.com/gift/popular")
    .then(res=>{
setArr(res.data.data);
    })
    .catch(err=>console.log(err))


},[])
 
  function CartHandle(ele) {
    let obj = {};
    let token = localStorage.getItem("token");
  
    if (token) {
      // Get user data
      axios
        .get("https://meghkhush-creation-e6ai.onrender.com/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          obj = res.data.data;
  
          // Check if the product already exists in the cart array
          const productExists = obj.cart.find((elem) => elem._id === ele._id);
     

       if (!productExists) {
            // Add arr to cart array
            ele.quantity=1;
            ele.added=true;
            if (obj.cart.length === 0) {
              obj.cart = [ele];
              obj.completedOrderArray=[ele];
            } else {
              obj.cart=[...obj.cart,ele]
              obj.completedOrderArray.push(ele);
            }
  
            // Patch the updated data
            axios
              .patch("https://meghkhush-creation-e6ai.onrender.com/user/cart", obj, {
                headers: { Authorization: `Bearer ${token}` },
              })
              .then((res) => {
                toast({
                  duration: 2000,
                  isClosable: true,
                  render: () => (
                    <div
                      style={{
                        backgroundColor: '#fa4a6f',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '15px 25px',
                        fontStyle: "revert-layer"
                      }}
                    >
                      Gift successfully added to your Basket.
                    </div>
                  ),
                });
                // Handle the response if needed
              })
              .catch((error) => {
                console.error("Failed to update user data:", error);
                // Handle the error if needed
              });
          } else {
            toast({
              duration: 2000,
              isClosable: true,
              render: () => (
                <div
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '15px 25px',
                    fontStyle: "revert-layer"
                  }}
                >
                  Product is already added in your cart.
                </div>
              ),
            });
          }
        })
        .catch((error) => {
          console.error("Failed to get user data:", error);
          // Handle the error if needed
        });
    } else {
      toast({
        duration: 4000,
        isClosable: true,
        render: () => (
          <div
            style={{
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px',
              padding: '15px 25px',
              fontStyle: "revert-layer"
            }}
          >
         Please log in to add any item to your cart.
          </div>
        ),
      });
     
      navigate("/");
    }
  }
   
    return(
        <>
        <Text mb="3%" fontWeight={"500"} fontSize={"4xl"}>Top-rated Gifts</Text>
         <Box display={"grid"} w={"90%"} m={"auto"}
          gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(5,1fr)"]}
          rowGap={["50px","30px"]} alignItems={"start"}   columnGap={"0px"} 
         >
        {
            arr.map((ele,idx)=>{
              const percentageDiscount = ((ele.realPrice - ele.price) / ele.realPrice) * 100;
                return(
                    <Box 
              h={["350px","430px","450px","500px","480px"]}
                    textAlign={"left"} key={idx} borderRadius={"10px"} 
                    boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}
                       >

                       <Image  onClick={()=>{navigate(`/gift/single/${ele._id}`)}}
                    h={["70%","72%"]} 
                             borderRadius={"10px 10px 0px 0px"}  src={ele.image[0]} />
                       <Box p="10px">
                       <Box  w={["150px","200px","200px","215px","250px"]}> 
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
<Flex alignItems={"center"} gap={["5px","10px"]}>
<Text fontSize={["small",""]} fontWeight={"600"} color={"gray.500"}>{`₹ ${ele.price}`}</Text>
<Text fontWeight={"600"} fontSize={["small","sm"]} textDecoration={"line-through"} color={"#fa4a65"}>{`₹ ${ele.realPrice}`}</Text>
<Text fontWeight={"600"} fontSize={["small","sm"]}  color={"#fa4a65"}>({percentageDiscount.toFixed(0)}% off)</Text>
</Flex>
<Text display={["none","block"]} fontWeight={"600"} fontSize={["small","sm"]}  color={"gray.500"}>(Delivery Charges extra)</Text>
                     
                     <Flex display={["flex","none"]}>
                     <Button bg={"white"} fontWeight={"1000"} _hover={{bg:"white",color:"#fa4a65", border:"1px solid #fa4a65" }}  onClick={()=>CartHandle(ele)} ><GrCart /></Button>
                     <Text fontWeight={"600"} fontSize={["small","sm"]}  color={"gray.500"}>(Delivery Charges extra)</Text>
                     </Flex>
                        <Flex mt="3%" gap="10px">
                        <Wrap>
                            <WrapItem>
                            <Button display={["none","block"]}
                         
                            //  borderRadius={"20px"}
                            _hover={{bg:"white",color:"#fa4a65", border:"1px solid #fa4a65" }}
                         fontSize={"sm"} pt="0px" pb="0px"
                            onClick={()=>CartHandle(ele)}
                            bg="white"
                             >Add to cart
                             </Button>
                           
                            </WrapItem>
                        </Wrap>
                           
                            <Button display={["none","block"]} onClick={()=>{navigate(`/gift/single/${ele._id}`)}}
                            color={"gray.600"} _hover={{bg:"white",color:"#fa4a65"}} bg="pink.50">Details</Button>
                        </Flex>
                      </Box>
                    
                    
                       
                       
                    </Box>
                )
            })
        }
    </Box>

    </> 
    )
}