import { Box, ButtonGroup,useToast,WrapItem,Wrap, Image, Text, Button, Flex} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {TiHeartOutline} from "react-icons/ti"
import {BsFillSuitHeartFill} from "react-icons/bs"
import {FaBasketShopping} from "react-icons/fa6"
import {FaRegHandPointRight} from "react-icons/fa6"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function GiftDetails() {

    const [arr, setArr] = useState({});
    
    const { id } = useParams();
    const navigate=useNavigate()
    const toast = useToast()

    useEffect(() => {

        axios.get(`https://meghkhush-creation-e6ai.onrender.com/gift/single/${id}`)
            .then(res => {
                setArr(res.data.data);
            })
            .catch(err => console.log(err))
         
    }, [])
  

    function favouritesHandle() {
      let obj = {};
      let token = localStorage.getItem("token");
    
      if (token) {
        axios.get("https://meghkhush-creation-e6ai.onrender.com/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          obj = res.data.data;
    
          // Check if the product already exists in the wishlist array
          const productExists = obj.wishlist.find((ele) => ele._id === arr._id);
          if (!productExists) {
            obj.wishlist.push(arr);
    
            // Patch the updated data
            axios.patch("https://meghkhush-creation-e6ai.onrender.com/user/wishlist", obj, {
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
                    Gift successfully added to Wishlist
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
             Product is already added to wishlist.
                </div>
              ),
            });
           
          
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
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
      Please log in to add any product to the wishlist.
            </div>
          ),
        });
      
      }
    }
    

    function CartHandle() {
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
            const productExists = obj.cart.find((ele) => ele._id === arr._id);
            if (!productExists) {
              // Add arr to cart array
              arr.quantity=1;
              arr.added=true;
              if (obj.cart.length === 0) {
                obj.cart = [arr];
                obj.completedOrderArray=[arr];
              } else {
                obj.cart.push(arr);
                obj.completedOrderArray.push(arr);
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
    
    const responsive = {
      largeDesktop: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
   
      };
      
    return (
      <>
        <Box display={"flex"} fontStyle={"revert-layer"} fontFamily={"revert-layer"} p="10px">
            <Box w={["60%","50%","40%"]}
              >
              {
            Array.isArray(arr.image) ?
              (
                <Carousel
  swipeable={true}
  draggable={true}
  focusOnSelect={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"

>
                   {
                        arr.image.map((ele, idx) => {
                            return (
                              <div key={idx} style={{backgroundColor:"#fa4a65", position:"relative",display:"flex" ,justifyContent:"center",margin:"auto",alignItems:"center"}}>
                              <Image
                                    src={arr.image[idx]} h={["275px","300px","400px","500px","500px"]} 
                                     />
                              </div>  
                            )
                        })
                    }
</Carousel>)
:( 

<Text>wait</Text>)
              }
              

            </Box>
            <Box w={["40%","50%","60%"]}   m={"auto"} textAlign={"left"} p={["5px 0px 0px 5px","10px 20px 10px 20px"]}>
                <Text color="#fa4a65" fontWeight={["500","0"]} fontSize={["medium","medium","3xl","4xl"]}>{arr.title}</Text>
                <Box display={"flex"} gap="15px">
                <Text fontSize={["small","medium","large","xl"]} fontWeight={"500"} color={"gray.500"}>{`₹ ${arr.price}`}</Text>
                <Text fontSize={["small","medium","large","xl"]} textDecoration={"line-through"} fontWeight={"500"} color={"gray.500"}>{`₹ ${arr.realPrice}`}</Text>
                </Box>
              
                <Text display={["none","block"]} color={"#2d2c2c"} fontSize={["","small","medium"]} h={["100px","75px","80px","100px"]} overflow={"auto"} fontWeight={"500"}>{arr.description}</Text>
                <Text mt={["5px","5px","10px"]} mb={["5px","0px","10px"]} fontSize={["x-small","sm"]} fontWeight={"500"} color={"gray.500"}>(Shipping is not included)</Text>
         <Box gap={["","","0px","20px"]} mt={["","","-10px","10px"]} display={"grid"} justifyContent={"center"} alignItems={"center"} m="auto">
         <Box w="100%" display={["grid","flex"]}>
           <Button onClick={()=>navigate("/sorry")} _hover={{bg:"black",color:"white"}} fontSize={["small","small","medium"]}
            w={["80%","70%","100%"]} p={["0px","5px 10px","10px 25px","20px 50px"]} m="10px" border={"2px solid #2d2c2c"} borderRadius={["5px","30px"]} bg="white">Buy It Now</Button>
          <Wrap>
            <WrapItem>
            <Button display={["none","flex"]} onClick={CartHandle} _hover={{border:"2px solid black",bg:"white",color:"black"}} w="100%" m="10px" p={["","5px 10px","10px 25px","20px 50px"]}
             color="white" fontSize={["small","small","medium"]} border={"2px solid white"} borderRadius={"30px"} bg="black">Add to Basket<span style={{marginLeft:"10px"}}><FaBasketShopping  fontSize={"20px"}/></span>
             </Button>
            </WrapItem>
          </Wrap> 
           </Box>   
           <Box  display={"flex"} justifyContent={"center"} m="auto">       
           <Wrap>    
        <WrapItem >
          <Button display={["none","flex"]} fontSize={["small","small","medium"]} onClick={favouritesHandle} _hover={{bg:"pink"}} p={["","0px 5px","5px 15px","20px 15px"]} bg="#fa4a65" borderRadius={"30px"} >Add to favourites<span style={{marginLeft:"10px"}}><BsFillSuitHeartFill color="pink" fontSize={["","20px","25px","30px"]} /></span></Button>
        </WrapItem>
    </Wrap>      
           </Box> 
          <Box display={"flex"}>
          <Button  borderRadius={"50%"}  bg={"#fa4a65"} display={["flex","none"]} onClick={CartHandle}>
      <span ><FaBasketShopping color="black" fontSize={["15px"]} /></span>
      </Button>
      <Button  borderRadius={"50%"}  bg={"#fa4a65"} display={["flex","none"]} onClick={favouritesHandle}>
      <span><BsFillSuitHeartFill color="pink" fontSize={["15px"]} /></span>
      </Button>
          </Box>
         </Box>
         <Box display={["none","none","block"]}>
         <Text mb={["","","7px","10px"]} textDecoration={"underline"} textUnderlineOffset={["","","6px","10px"]} fontSize={["","","medium","xl"]} fontWeight={"500"} color={"gray.500"}>Key Points:</Text>
         <Text fontSize={["","16px","16px"]} display={"flex"} alignItems={"center"}><span style={{marginRight:"10px"}}><FaRegHandPointRight/></span>{`Size : ${arr.size}`}</Text>
         <Text fontSize={"16px"} display={"flex"} alignItems={"center"}><span style={{marginRight:"10px"}}><FaRegHandPointRight/></span>{`Making Time : ${arr.makingTime}`}</Text>
         <Text fontSize={"16px"} display={"flex"} alignItems={"center"}><span style={{marginRight:"10px"}}><FaRegHandPointRight/></span>{`Delivery Time : ${arr.deliveryTime}`}</Text>
         </Box>
         
            </Box>
        </Box>


        <Box p="10px" display={["","block","none"]} textAlign={"left"}>
        <Text display={["block","none"]} color={"#2d2c2c"} fontSize={["small","small","medium"]} h={["120px","75px","80px","100px"]} overflow={"auto"} fontWeight={"500"}>{arr.description}</Text>
 <Text  mb={["","","7px","10px"]} textDecoration={"underline"} textUnderlineOffset={["","","6px","10px"]} fontSize={["","","medium","xl"]} fontWeight={"500"} color={"gray.500"}>Key Points:</Text>
         <Text fontSize={["","16px","16px"]} display={"flex"} alignItems={"center"}><span style={{marginRight:"10px"}}><FaRegHandPointRight/></span>{`Size : ${arr.size}`}</Text>
         <Text fontSize={"16px"} display={"flex"} alignItems={"center"}><span style={{marginRight:"10px"}}><FaRegHandPointRight/></span>{`Making Time : ${arr.makingTime}`}</Text>
         <Text fontSize={"16px"} display={"flex"} alignItems={"center"}><span style={{marginRight:"10px"}}><FaRegHandPointRight/></span>{`Delivery Time : ${arr.deliveryTime}`}</Text>
        </Box>
        </>
    )
}