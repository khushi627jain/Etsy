import {Wrap,WrapItem, Box, Button, Flex, Grid, GridItem ,Image,Text,Heading, useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,Select,Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input, FormControl,
    FormLabel, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    FormErrorMessage,
    FormHelperText,
  Checkbox,
  useDisclosure,
  Table,
  Thead,
  Th,
  Tbody,
  Td,} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios"
import {AiFillDelete} from "react-icons/ai"
import {BsArrowUpRightCircleFill} from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsChatSquareHeart} from "react-icons/bs"
import {ChevronDownIcon} from '@chakra-ui/icons'
import "./some.css"


export default function Cart(){

    const [cartArr,setCartArr]=useState([])
    const[usersData,setUsersData]=useState([]);
    const[change,setChange]=useState(false)
    const[total,setTotal]=useState(0);
    const[totalQuantity,setTotalQuantity]=useState(0)
    const[realprice,setRealPrice]=useState(0);
    const[discount,setDiscount]=useState(0);
    const navigate=useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const[select,setSelect]=useState(true);
const toast=useToast()
    const token =localStorage.getItem("token")
    const { isOpen, onOpen, onClose } = useDisclosure()
const [address,setAddress]=useState({
  fullName:"",
  state:"",
  num:0,
  streetAddress:"",
  landmark:"",
  city:"",
  pincode:0,
  email:"",
})





useEffect(()=>{
if(token){ 
    axios
    .get("https://meghkhush-creation-e6ai.onrender.com/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setCartArr(res.data.data.cart)
      setUsersData(res.data.data);
    })
   
}
   else{
    alert("Login please for adding any product to cart")
    navigate("/")
   }
setChange(false)
},[change])

useEffect(() => {
  const amount = cartArr.reduce((acc, curr) => {
    return curr.added==true?acc + curr.price * parseInt(curr.quantity):acc;
  }, 0);
  const realAmount = cartArr.reduce((acc, curr) => {
    return curr.added==true?acc + curr.realPrice * parseInt(curr.quantity):acc;
  }, 0);
  const quantity=cartArr.reduce((acc,curr)=>{
    return curr.added==true?acc+ parseInt(curr.quantity):acc
  },0)
  const disc=cartArr.reduce((acc,curr)=>{
    const discount = ((curr.realPrice - curr.price) / curr.realPrice) * 100* parseInt(curr.quantity);
    return curr.added==true?acc+discount:acc
  },0)
  setTotalQuantity(quantity)
  setTotal(amount)
  setRealPrice(realAmount)
 setDiscount(disc)

}, [cartArr,change]); 

    function removeGift(giftId){
    const userId=usersData._id;
     let cart=cartArr.filter((ele,idx)=>{
        if(ele._id!=giftId) return ele;
     })
        axios.patch(`https://meghkhush-creation-e6ai.onrender.com/user/remove/cart/${userId}`,cart,{
            headers: { Authorization: `Bearer ${token}` },
          })
          .catch(err=>console.log(err))
         setChange(true);
    }

    function favouritesHandle(arr) {
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

    function changeQuantity(id,newquantity){


      const updatedCartItems = cartArr.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: newquantity };
        }
        return item;
      });
    setCartArr(updatedCartItems)
 
  
      axios.patch(`https://meghkhush-creation-e6ai.onrender.com/user/quantity/${id}/${newquantity}`,id,
      { headers:{Authorization:`Bearer ${token}`}})
      .catch(err=>console.log(err))
    }

    function checkBoxChange(e, ele){
      setCartArr((prevCartArr) =>
        prevCartArr.map((element) =>
          element._id === ele._id ? { ...element, added: e.target.checked } : element
        )
      );
      if (!e.target.checked) {
        setTotal(total - ele.price * ele.quantity);
        setTotalQuantity(totalQuantity - ele.quantity); 
      } else {
        setTotal(total + ele.price * parseInt(ele.quantity));
        setTotalQuantity(totalQuantity + parseInt(ele.quantity));
      }
    }
    

    function handleCheckOut(){
      const newArr=cartArr.filter((ele,idx)=>ele.added==true)
   
      axios.patch(`https://meghkhush-creation-e6ai.onrender.com/user/order`,newArr,
      { headers:{Authorization:`Bearer ${token}`}})
      .catch(err=>console.log(err))
      onOpen()
    }

    function handleSelect(){

if(select){
  let newArr=cartArr.map((ele)=>{
    return {...ele,added:false}
  })
setCartArr(newArr);
}
else{
  let newArr=cartArr.map((ele)=>{
    return {...ele,added:true}
  })
setCartArr(newArr);
}


     setSelect(!select)
    }

    function handleInputChange(e){
      setAddress({...address,[e.target.name]:e.target.value})
    }

    function handlePayment(){
      const stringNumber=address.num.toString()
      let check=false;
      if((stringNumber.length!=10)||(!(stringNumber.charAt(0)>='6'&&stringNumber.charAt(0)<='9'))){
       check=true;
      }
     
      if (
        address.fullName === "" ||
        address.state === "" ||
        address.num === 0 ||
        address.streetAddress === "" ||
        address.landmark === "" ||
        address.city === "" ||
        address.pincode === 0 ||
        address.email === ""||check
      ) {
        setShowAlert(true);
        return;
      }
      else{
        setShowAlert(false)
        onClose();
        axios.patch("https://meghkhush-creation-e6ai.onrender.com/user/address",address,{headers:{Authorization:`Bearer ${token}`}})
        .catch(err=>console.log(err))
        .then(res=>{
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
                Address Successfully saved
              </div>
            ),
          }); 
          navigate("/sorry")
        })

      }
    }

    const handleMouseEnter = (id) => {
      const image = document.getElementById(id);
      image.style.transform = 'scale(1.6)';
    
    };
  
    const handleMouseLeave = (id) => {
      // When the mouse leaves the image, reset the scale to its original size.
      const image = document.getElementById(id);
      image.style.transform = 'scale(1)';
    };

    return(
<Box bg="#eaeded" >
        {
            cartArr.length==0?<Heading>OOPS !! No item in cart</Heading>: 
            <>
            {showAlert && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Fill all required fields for processing!</AlertTitle>
          <AlertDescription>Fill all fields and check phone number<Text>(It should be 10 digits)</Text></AlertDescription>
        </Alert>
      )}

     

            <Box m="auto"  display={["grid","grid","flex"]}>
            <Box  w={["95%","100%","70%"]} m={["10px","20px 0px 20px 20px"]}  p={["0px","10px","15px"]} textAlign={"left"} bg="white" >
            <Text fontFamily={"-moz-initial"} fontWeight="500" fontSize={["3xl","4xl"]}>Shopping Cart</Text>
            {select?<Text cursor={"pointer"} onClick={handleSelect} color={"#fa4a56"} >Deselect all items</Text>:
            <Text gap={"10px"} display={"flex"}>No items selected<span><Text cursor={"pointer"} color={"blue"} textDecoration={"underline"} onClick={handleSelect}> Select all items</Text></span></Text>}
            <hr/>
            {/* all cart product */}
            <Box mt="3%" gap={"30px"} display={"grid"}>
            {
              cartArr.map((ele,idx)=>{
                const percentageDiscount = ((ele.realPrice - ele.price) / ele.realPrice) * 100;
                return(
                 <Box >
                  <Box display={"flex"} alignItems={"center"}  gap={["1%","2%","4%"]} ml="0%">
                  <Checkbox colorScheme="cyan" onChange={(e)=>checkBoxChange(e,ele)} isChecked={ele.added} ></Checkbox>
                  {/* 1st div -image */}
                  <Box   >
                  <Image id={`img${idx}`}
                   onMouseEnter={() => handleMouseEnter(`img${idx}`)}
            onMouseLeave={() => handleMouseLeave(`img${idx}`)}
            style={{ transition: 'transform 0.2s ease' }}
                   borderRadius={"10px"} src={ele.image} w={["","","","300px","fit-content"]} h={["110px","150px","160px","180px","200px"]}   mb={["0","10px"]}/>
                  </Box>
                  {/* 2nd div detail*/}
                  <Box ml={["10px","0"]}>
                  <Text fontWeight={"500"} fontSize={["15px","17px"]}>{ele.title}</Text>
                  <Flex alignItems={"center"} gap={["3px","10px"]}>
<Text fontWeight={"600"} fontSize={["sm","medium"]} color={"gray.500"}>{`₹ ${ele.price}`}</Text>
<Text fontWeight={"600"} fontSize={["small","sm"]} textDecoration={"line-through"} color={"#fa4a65"}>{`₹ ${ele.realPrice}`}</Text>
<Text fontWeight={"600"}  fontSize={["small","sm"]}  color={"#fa4a65"}>({percentageDiscount.toFixed(0)}% off)</Text>
                  </Flex>
                  <Text fontWeight={"600"} fontSize={["10px","sm"]}  color={"gray.500"}>(Delivery Charges extra)</Text>
                  {/* flex box */}
                  <Box   flexWrap={"wrap"} mr={["10px","0"]} mb="10px" fontStyle={"revert-layer"}   justifyContent={"center"}  gap={["1%","1%","2%","4%"]} cursor={"pointer"} gridTemplateColumns={"repeat(8,1fr)"} mt="3%" display={["flex","flex","flex","grid"]} alignItems={"center"}>

                  <Menu >
  <MenuButton m={"auto"}  h={["20px","30px"]} pr={["5px","8px","10px","20px","15px"]} mr={["0","10px"]}   fontSize={"sm"} backgroundColor={"gray.200"}  border={"1px solid gray"} as={Button} >
  Qty:{ele.quantity}<span><ChevronDownIcon/></span>
  </MenuButton>
  <MenuList>
  <MenuItem onClick={()=>removeGift(ele._id,idx)}>0 (Delete)</MenuItem>
  <MenuItem onClick={()=>changeQuantity(ele._id,1)}>1</MenuItem>
    <MenuItem onClick={()=>changeQuantity(ele._id,2)}>2</MenuItem>
    <MenuItem onClick={()=>changeQuantity(ele._id,3)}>3</MenuItem>
    <MenuItem onClick={()=>changeQuantity(ele._id,4)}>4</MenuItem>
    <MenuItem onClick={()=>changeQuantity(ele._id,5)}>5</MenuItem>   
  </MenuList>
</Menu>
                
                  <Box h="15px"  w="1px" border={"1px solid gray"}>
                  </Box>
                  <Text ml="0px" fontSize={"sm"} onClick={()=>removeGift(ele._id,idx)} >Delete</Text>
                  <Box h="15px" w="1px"  border={"1px solid gray"}>
                  </Box>
                  <Text fontSize={"sm"} w={["120px","110px","110px"]} gap={["5px","5px","10px"]} onClick={()=>favouritesHandle(ele)} display={"flex"} alignItems={"center"}>Save for later<span><BsChatSquareHeart /></span></Text>
                  <Box h="15px"  w="1px" border={"1px solid gray"}>
                  </Box>
                  <Text fontSize={"sm"} onClick={()=>{navigate(`/gift/single/${ele._id}`)}}>Details</Text>
                  </Box>
                 
                  </Box>
                  </Box>
                  <hr/>
                </Box>
                )
              })
            }

            </Box>

            </Box>

            <Drawer
        isOpen={isOpen} size={"md"}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Enter your delivery address</DrawerHeader>

          <DrawerBody>
          <FormControl isRequired>
  <FormLabel>Email</FormLabel>
  <Input value={address.email} name="email" onChange={(e)=>handleInputChange(e)} placeholder='' />

  <FormLabel>Country</FormLabel>
  <Input  value="India" />

  <FormLabel>Full Name</FormLabel>
  <Input  name="fullName" value={address.fullName} onChange={(e)=>handleInputChange(e)} placeholder='' />

  <FormLabel>Street address</FormLabel>
  <Input onChange={(e)=>handleInputChange(e)} name="streetAddress" value={address.streetAddress} placeholder='' />

  <FormLabel>Apt / Suite / Landmark / Other (optional)</FormLabel>
  <Input onChange={(e)=>handleInputChange(e)} name="landmark" value={address.landmark} placeholder='' />

  <FormLabel >City</FormLabel>
  <Input onChange={(e)=>handleInputChange(e)} name="city" value={address.city} placeholder='' />

  <Flex>
  <Box>
  <FormLabel>Pincode</FormLabel>
  <Input onChange={(e)=>handleInputChange(e)} name="pincode" value={address.pincode} placeholder='' />
  </Box> 
  <Box>
  <FormLabel>State</FormLabel>
  <Select placeholder='' value={address.state} name="state" onChange={(e)=>handleInputChange(e)} >
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  </Select>
  </Box>
  </Flex>

  <FormLabel>Phone Number</FormLabel>
  <Input onChange={(e)=>handleInputChange(e)} name="num" value={address.num} placeholder='Enter a 10-digit mobile number (must start with 6, 7, 8, or 9)' />

</FormControl>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={handlePayment}>
             Continue To payment
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

        
            <Box  w={["95%","100%","30%"]}  m={["10px","20px"]} bg={"white"} > 
         
            <Box className="price" display={"grid"} p={["20px 10px","40px 20px"]}>

              <Box display={"flex"} justifyContent={"space-between"} gap={["10px","20px"]} alignItems={"center"}>
                <Text fontWeight={500} fontSize={["medium","2xl"]} display={"flex"} >Item(s) Total</Text>    
                <Text fontSize={["sm","xl"]}>{totalQuantity}</Text>
              </Box>

              <Box   h="1px"
  w="100%"
  boxShadow="inset 0 -0.2px 0 gray"
  backgroundColor="transparent" m="10px 0">
  </Box>

              <Box display={"flex"} justifyContent={"space-between"} gap={["10px","20px"]} alignItems={"center"}>
                <Text  fontSize={["15px","19px"]} display={"flex"} >Total Price</Text>    
                <Text fontSize={["sm","xl"]}>{realprice} ₹</Text>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"} gap={["10px","20px"]} alignItems={"center"}>
                <Text  fontSize={["15px","19px"]} display={"flex"} >Total Discount</Text>    
                <Text fontSize={["sm","xl"]}>-{realprice-total} ₹</Text>
              </Box>

              
              <Box   h="1px"
  w="100%"
  boxShadow="inset 0 -0.2px 0 gray"
  backgroundColor="transparent" m="10px 0">
  </Box>

              <Box display={"flex"} justifyContent={"space-between"} gap={["0px","20px"]} alignItems={"center"}>
                <Text fontWeight={500} fontSize={["medium","2xl"]} display={"flex"} >Discounted Price</Text>    
                <Text fontSize={["sm","xl"]}>{total} ₹</Text>
              </Box>

            </Box>
        
           <Button onClick={handleCheckOut} p={["0 20px","0 50px","0 20px","","0 50px"]} _hover={{backgroundColor:"blackAlpha.600"}} borderRadius={"20px"} m={["0 0 10px 0","0 0 40px 0"]} bg="blackAlpha.900" color={"white"}>Proceed to checkout
           </Button>
           </Box>
           
           
            </Box>
</>
        }
        </Box>
    )
}