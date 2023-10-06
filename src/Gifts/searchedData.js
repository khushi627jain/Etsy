import { Box,Tag, Checkbox, CheckboxGroup, Image, Input,Text, Select,Flex,Button, Grid, GridItem
    ,Drawer, DrawerBody,DrawerFooter,Stack,Center,  DrawerHeader, DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure, useToast
    } from "@chakra-ui/react";
import axios from "axios";
import { useEffect,useState,useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaShoppingCart} from "react-icons/fa"
import {BsArrowUpRightCircleFill} from "react-icons/bs"

export default function Search(){

const[arr,setArr]=useState([]);
const navigate=useNavigate()
const {searchData} =useSelector(store=>store)
const[pagination,setPagination]=useState([]);
const[allData,setAllData]=useState([]);
const [page,setPageNo]=useState(1);
const { isOpen, onOpen, onClose } = useDisclosure()
const [filterData,setFilteredData]=useState({
    priceType:"",
    price:[],
    name:"",
    occasion:[],
    category:[],
    tags:[],
})
const toast=useToast()
const {query}=useParams()
const firstField = useRef()

useEffect(() => {
    setFilteredData((prev) => ({ ...prev, name: query }));
  }, [query]);


 
  useEffect(()=>{
    
    axios.get("https://meghkhush-creation-e6ai.onrender.com/gift",{
        params:{
            priceType:filterData.priceType,
            price:filterData.price,
            name:filterData.name,
            occasion:filterData.occasion,
            category:filterData.category,
            tags:filterData.tags
        }
    })
    .then(res=>setArr(res.data.data))
  },[filterData,page])

  useEffect(()=>{
    axios.get("https://meghkhush-creation-e6ai.onrender.com/gift/all")
    .then(res=>{
setAllData(res.data.data)
    })
    .catch(err=>console.log(err))


},[])

  function setPageNumber(no){
    setPageNo(no);
    }

function changePriceType(e){
    setFilteredData((prev)=>({
        ...prev,priceType:e.target.value
    }))
}

function changePrice(selectedValues){
    setFilteredData((prev)=>({
        ...prev,price:selectedValues
    }))
}

function changeName(val){
    setFilteredData((prev)=>({...prev,name:val}))
}

function changeOccasion(selectedValues){
    setFilteredData((prev)=>({
        ...prev,occasion:selectedValues
    }))
}

function changeTags(selectedValues){
    setFilteredData((prev)=>({
        ...prev,tags:selectedValues
    }))
}

function changeCategory(selectedValues){
    setFilteredData((prev)=>({
        ...prev,category:selectedValues
    }))
}

function changeClearFilters(){
setFilteredData((prev)=>({
    priceType:"",
    price:[],
    name:"",
    occasion:[],
    category:[],
    tags:[],
}))
}



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
{
  arr.length===0?<>
<Box 
fontFamily="sans-serif" 
      bgPosition="center"
      pt="150px" pb="150px"
      minH="auto"
bgImage={"https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}>
  <Text fontSize={["3xl"]} >
  Apologies, but it seems that our search came up empty-handed for {query}.
 </Text>
  <Text fontSize={["2xl"]}>   To ensure an enriching experience, kindly explore other topics by using a more suitable keyword.</Text>
<Text fontSize={["4xl"]} fontWeight={"600"} fontFamily={"cursive"} color="#fa4a65"> Happy searching!</Text>
</Box>


  </>:(
    <Box fontFamily={"revert-layer"} display={["grid","grid","flex"]} gap="10px" p="10px">
       <Box w={["0","0","30%","30%","21%"]} display={["none","none","block"]}   textAlign={"left"} p="10px">
    <Text color={"#fa4a6f"}  fontWeight={"500"} mt="10px" mb="5px" align={"left"} cursor={"pointer"} onClick={changeClearFilters}>Clear filters</Text>
   <Select mb="10px" placeholder="Sort by price" value={filterData.priceType}
    onChange={(e)=>changePriceType(e)}>
       <option value="asc">Price - Low to High</option>
       <option value="desc">Price - High to Low</option>
   </Select>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Price</Text>
           <CheckboxGroup
             colorScheme="pink"
       value={filterData.price}
             onChange={changePrice}
             display="flex" flexWrap="wrap"
           >
             <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"}>
               <Checkbox value="100-500">₹100 - ₹500</Checkbox>
               <Checkbox value="500-1000">₹500 - ₹1000</Checkbox>
               <Checkbox value="1000-2000">₹1000 - ₹2000</Checkbox>
               <Checkbox value="2000-3000">₹2000 - ₹3000</Checkbox>
               <Checkbox value="4000+">₹ 4000+</Checkbox>
             </Box>
           </CheckboxGroup>
           <Box
       borderBottom="1px solid"
       borderColor="gray.200" // Sets the border color to gray.500
       mt="10px"
       mb="10px"
     />
   
   <Input borderColor={"2px solid #fa4a6f"} placeholder="Search By Name" color={"#fa4a6f"} onChange={(e)=>{changeName(e.target.value)}}/>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Search By Occasion</Text>
   <CheckboxGroup colorScheme="pink" value={filterData.occasion} onChange={changeOccasion}>
   <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"}>
       <Checkbox value="anniversary">Gift for Anniversary</Checkbox>
       <Checkbox value="birthday">Gift for Birthday</Checkbox>
       <Checkbox value="marriage">Gift for Wedding</Checkbox>
       <Checkbox value="valentine day">Gift for valentine's Day</Checkbox>
       <Checkbox value="proposal">Gift for proposal</Checkbox>
       <Checkbox value="raksha bandhan">Gift for Raksha Bandhan</Checkbox>
   </Box>
   </CheckboxGroup>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Search By Category</Text>
   <CheckboxGroup colorScheme="pink" value={filterData.category} onChange={changeCategory}>
       <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"}>
           <Checkbox value="explosion">Explosion Box</Checkbox>
           <Checkbox value="frame">Frames</Checkbox>
           <Checkbox value="bouquet">Bouquet</Checkbox>
            <Checkbox value="mantra frame">Mantra Frame</Checkbox>
           <Checkbox value="home decor">Home Decor</Checkbox>
           <Checkbox value="nameplate">Name Plate </Checkbox>
            <Checkbox value="resin gifts">Resin Gifts</Checkbox>
            <Checkbox value="ring platter">Ring Platter</Checkbox>
            <Checkbox value="keychain">Key-Chain</Checkbox>
            <Checkbox value="">Wall Hanging</Checkbox>
            <Checkbox value="return gift">Return Gift</Checkbox>
            <Checkbox value="wooden box">Wooden Box</Checkbox>
            <Checkbox value="phone cover">Phone Cover</Checkbox>
            <Checkbox value="wedding">Wedding</Checkbox>
       </Box>
   </CheckboxGroup>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Tags</Text>
   <CheckboxGroup colorScheme="pink" value={setFilteredData.tags} onChange={changeTags}>
       <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"} >
           <Checkbox value="budget friendly">Budget Friendly</Checkbox>
           <Checkbox value="expensive and royal">Expensive and Royal</Checkbox>
           <Checkbox value="houseWarming">House Warming</Checkbox>
           <Checkbox value="unique">Unique</Checkbox>
           <Checkbox value="couple">Couple</Checkbox>
           <Checkbox value="office">Office</Checkbox>
           <Checkbox value="him">Him</Checkbox>
           <Checkbox value="her">Her</Checkbox>
           <Checkbox value="decor">Decor</Checkbox>
           <Checkbox value="spirituality">Spirituality</Checkbox>
           <Checkbox value="brother">Brother</Checkbox>
           <Checkbox value="sister">Sister</Checkbox>
           
       </Box>
   </CheckboxGroup>
   
   
   <Box bg="gray.300" border={"1px solid gray.100"} ></Box>
       </Box>
       <Box display={["block","block","none"]}>
   <Button onClick={onOpen} display={["block","block","none"]}>All Filters</Button>
   
   <Drawer
           isOpen={isOpen}
           placement='left'
           initialFocusRef={firstField}
           onClose={onClose}
         >
           <DrawerOverlay />
           <DrawerContent >
          
             <DrawerHeader color="#fa4a6f" fontFamily={"cursive"} fontSize={"2xl"} >
             MeghKhush Creation
             </DrawerHeader>
             <DrawerCloseButton />
             <DrawerBody fontFamily={"revert-layer"}>
               <Stack spacing='24px'>
                 <Box>
              
                 <Text color={"#fa4a6f"}  fontWeight={"500"} mt="10px" mb="5px" align={"left"} cursor={"pointer"} onClick={changeClearFilters}>Clear filters</Text>
   <Select mb="10px" placeholder="Sort by price" value={filterData.priceType}
    onChange={(e)=>changePriceType(e)}>
       <option value="asc">Price - Low to High</option>
       <option value="desc">Price - High to Low</option>
   </Select>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Price</Text>
           <CheckboxGroup
             colorScheme="pink"
       value={filterData.price}
             onChange={changePrice}
             display="flex" flexWrap="wrap"
           >
             <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"}>
               <Checkbox value="100-500">₹100 - ₹500</Checkbox>
               <Checkbox value="500-1000">₹500 - ₹1000</Checkbox>
               <Checkbox value="1000-2000">₹1000 - ₹2000</Checkbox>
               <Checkbox value="2000-3000">₹2000 - ₹3000</Checkbox>
               <Checkbox value="4000+">₹ 4000+</Checkbox>
             </Box>
           </CheckboxGroup>
           <Box
       borderBottom="1px solid"
       borderColor="gray.200" // Sets the border color to gray.500
       mt="10px"
       mb="10px"
     />
   
   <Input borderColor={"2px solid #fa4a6f"} placeholder="Search By Name" color={"#fa4a6f"} onChange={(e)=>{changeName(e.target.value)}}/>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Search By Occasion</Text>
   <CheckboxGroup colorScheme="pink" value={filterData.occasion} onChange={changeOccasion}>
   <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"}>
       <Checkbox value="anniversary">Gift for Anniversary</Checkbox>
       <Checkbox value="birthday">Gift for Birthday</Checkbox>
       <Checkbox value="marriage">Gift for Wedding</Checkbox>
       <Checkbox value="valentine day">Gift for valentine's Day</Checkbox>
       <Checkbox value="proposal">Gift for proposal</Checkbox>
       <Checkbox value="raksha bandhan">Gift for Raksha Bandhan</Checkbox>
   </Box>
   </CheckboxGroup>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Search By Category</Text>
   <CheckboxGroup colorScheme="pink" value={filterData.category} onChange={changeCategory}>
       <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"}>
           <Checkbox value="explosion">Explosion Box</Checkbox>
           <Checkbox value="frame">Frames</Checkbox>
           <Checkbox value="bouquet">Bouquet</Checkbox>
            <Checkbox value="mantra frame">Mantra Frame</Checkbox>
           <Checkbox value="home decor">Home Decor</Checkbox>
           <Checkbox value="nameplate">Name Plate </Checkbox>
            <Checkbox value="resin gifts">Resin Gifts</Checkbox>
            <Checkbox value="ring platter">Ring Platter</Checkbox>
            <Checkbox value="keychain">Key-Chain</Checkbox>
            <Checkbox value="">Wall Hanging</Checkbox>
            <Checkbox value="return gift">Return Gift</Checkbox>
            <Checkbox value="wooden box">Wooden Box</Checkbox>
            <Checkbox value="phone cover">Phone Cover</Checkbox>
            <Checkbox value="wedding">Wedding</Checkbox>
       </Box>
   </CheckboxGroup>
   
   <Text color={"#fa4a6f"} fontSize="xl" fontWeight={"500"} mt="10px" mb="5px" align={"left"}>Tags</Text>
   <CheckboxGroup colorScheme="pink" value={setFilteredData.tags} onChange={changeTags}>
       <Box spacing={2} gap="5px" display={"flex"} flexWrap={"wrap"} >
           <Checkbox value="budget friendly">Budget Friendly</Checkbox>
           <Checkbox value="expensive and royal">Expensive and Royal</Checkbox>
           <Checkbox value="houseWarming">House Warming</Checkbox>
           <Checkbox value="unique">Unique</Checkbox>
           <Checkbox value="couple">Couple</Checkbox>
           <Checkbox value="office">Office</Checkbox>
           <Checkbox value="him">Him</Checkbox>
           <Checkbox value="her">Her</Checkbox>
           <Checkbox value="decor">Decor</Checkbox>
           <Checkbox value="spirituality">Spirituality</Checkbox>
           <Checkbox value="brother">Brother</Checkbox>
           <Checkbox value="sister">Sister</Checkbox>
           
       </Box>
   </CheckboxGroup>
   
   
   <Box bg="gray.300" border={"1px solid gray.100"} ></Box>             
   
               
         
              
                 </Box>
               </Stack>
             </DrawerBody>
   
            
           </DrawerContent>
         </Drawer>
   
       </Box>
       <Box   display={"grid"} justifyContent={"center"} w="100%">
   
   
 
     
   
       <Grid 
       display="grid" 
        gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} 
    m={"auto"} rowGap={"10px"}
       gap={["5px","5px","5px","2px","1%"]}
      
       >
          {
               arr.map((ele,idx)=>{
                   const percentageDiscount = ((ele.realPrice - ele.price) / ele.realPrice) * 100;
                   return(
                       <GridItem h={["370px","500px","","500px","550px"]}
                         boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} 
                     key={idx} textAlign={"left"} borderRadius={"10px 10px 0 0"}
                         >
                       <Image 
                               // w="100%" h="350px" 
                               onClick={()=>{navigate(`/gift/single/${ele._id}`)}}
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
<Flex display={["none","flex"]} mt="3%" gap={["0","10px"]}>
                            <Button
                             border={"1px solid black"} 
                           
                            _hover={{bg:"white",color:"#fa4a6f"}}
                           fontSize={"sm"} 
                            bg="white" onClick={()=>CartHandle(ele)}
                             >Add to cart
                             </Button>
                                                    <Button  onClick={()=>{navigate(`/gift/single/${ele._id}`)}}
                            color={"gray.600"} _hover={{bg:"white",color:"#fa4a65"}} bg="pink.50">Details
                            </Button>
                        </Flex>

                        <Flex mt={"3%"} gap={"10px"} display={["flex","none"]}>
                          <Button  onClick={()=>{navigate(`/gift/single/${ele._id}`)}} bg="#8b8b8b"><BsArrowUpRightCircleFill /></Button>
                          <Button onClick={()=>CartHandle(ele)} bg="#8b8b8b"><FaShoppingCart /></Button>
                        </Flex>
                         </Box>
                       </GridItem>
                   )
               })
           }
           
       </Grid>
       <Flex mt="2%" justifyContent={"center"} gap={"10px"}>
       {
           pagination.map((ele,idx)=>{
   return(
       
       <Button color={"white"}  onClick={()=>setPageNumber(idx+1)} borderRadius={"50%"} bg={page==idx+1?"black":"#fa4a6f"} >{idx+1}</Button>
     
   )
           })
       }
       </Flex>
           </Box>
       </Box>
  )
}

    
       
       </>
)
    
}