import {
    Box, Tag, Checkbox, CheckboxGroup, Image, Input, Text, Select, Flex, Button, Grid, GridItem
    , Drawer, DrawerBody, DrawerFooter, Stack, Center,FormControl,
    FormLabel,Textarea,
    FormHelperText, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditAndDelete() {

    const [arr, setArr] = useState([]);

    const navigate = useNavigate()
    const [pagination, setPagination] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [page, setPageNo] = useState(1);
    const toast = useToast()
    const[Id,setId]=useState("")
    const [formData,setFormData]=useState({
        title:"",description:"",category:[],tags:[],occasion:[],
        realPrice:0,price:0,popular:false,image:[],video:[],size:"",deliveryTime:"",makingTime:""
    })
    const token=localStorage.getItem("token")
    let debounceTimer;

    useEffect(() => {
        axios.get("https://meghkhush-creation-e6ai.onrender.com/gift", {
            params: { page }
        })
            .then(res => {
                setArr(res.data.data)
                let paginationArray = new Array(Math.ceil(res.data.totalGifts / 6)).fill(1);
                setPagination(paginationArray)

            })

    }, [page])


    function setPageNumber(no) {
        setPageNo(no);
    }
    const handleInputChange = (e) => {
        
          setFormData({ ...formData, [e.target.name]: e.target.value });
        // Adjust the debounce delay as needed (e.g., 300 milliseconds)
      };

    function handleDelete(id) {
        axios.delete(`https://meghkhush-creation-e6ai.onrender.com/gift/${id}`)
        toast({
            duration: 2000,
            isClosable: true,
            render: () => (
                <div
                    style={{
                        backgroundColor: '#fa4a6f', // New background color
                        color: 'white', // New text color
                        borderRadius: '10px', // New border radius
                        padding: '15px 25px',
                        fontStyle: "revert-layer"
                    }}
                >
                    Product is successfully deleted.
                </div>
            ),

        })

        let obj = arr.filter((ele, idx) => {
            if (ele._id != id) return ele;
        })
       
        setArr(obj)
    }

    function handleEdit(ele){
      setFormData((prev)=>({...prev,
    title:ele.title,description:ele.description,category:ele.category,tags:ele.tags,occasion:ele.occasion,
    realPrice:ele.realPrice,price:ele.price,popular:ele.popular,image:ele.image,video:ele.video,size:ele.size,deliveryTime:ele.deliveryTime,makingTime:ele.makingTime


}))
setId(ele._id) 
onOpen();
    }

    function handleCategory(val){
        setFormData((prev)=>({...prev,category:val}))
        }
    function handleOccasion(val){
            setFormData((prev)=>({...prev,occasion:val}))
            }
    function handleTags(val){
                setFormData((prev)=>({...prev,tags:val}))
                }
    function handlePopular(val){
                    setFormData((prev)=>({...prev,popular:val}))          
                }

    function handleSubmit(){
                    event.preventDefault();
                  
               axios.patch(`https://meghkhush-creation-e6ai.onrender.com/gift/${Id}`,formData,{headers:{authorization:`Bearer ${token}`}})
               .then(res=>{
              
                toast({
                    duration: 2000,
                    isClosable: true,
                    render: () => (
                        <div
                            style={{
                                backgroundColor: '#fa4a6f', // New background color
                                color: 'white', // New text color
                                borderRadius: '10px', // New border radius
                                padding: '15px 25px',
                                fontStyle: "revert-layer"
                            }}
                        >
                            Product is successfully edited
                        </div>
                    ),
        
                })
              
                setArr(prevData => prevData.map(product => product._id === Id ? { ...product, ...formData } : product))



               })
               .catch(err=>console.log(err))




                }

                const category = [
                    "explosion",
                    "frame",
                    "bouquet",
                    "mantra frame",
                    "wedding",
                    "home decor",
                    "nameplate",
                    "resin gifts",
                    "phone cover",
                    "wooden box",
                    "ring platter",
                    "keychain",
                    "random",
                    "wall hanging",
                    "return gift",
                  
                  ];
                  
                  const occasion= [
                    "anniversary",
                    "birthday",
                    "proposal",
                    "baby shower",
                    "raksha bandhan",
                    "valentine day",
                    "marriage",
                    "spiritual",
                  "engagement",
                  "inauguration",
                    "houseWarming",
                  ];
                  
                  const tags = [
                    "mother",
                    "father",
                    "husband",
                    "wife",
                    "girlfriend",
                    "boyfriend",
                    "him",
                    "her",
                    "friend",
                    "decor",
                    "budget friendly",
                    "expensive and royal",
                    "family",
                    "spirituality",
                    "inauguration",
                    "houseWarming",
                    "sister",
                    "brother",
                    "unique",
                    "couple",
                  "office",
                  "wedding"
                  ]; 

    return (
        <>
            <Box fontFamily={"revert-layer"} display={["grid", "grid", "flex"]} gap="10px" p="10px" m="auto">
                <Box display={"grid"} justifyContent={"center"} w="100%">
                    <Grid
                        display="grid" gridTemplateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}

                        gap={["5px", "5px", "5px", "2px", "1%"]}

                    >
                        {
                            arr.map((ele, idx) => {
                                const percentageDiscount = ((ele.realPrice - ele.price) / ele.realPrice) * 100;
                                return (
                                    <GridItem key={idx} textAlign={"left"} >
                                        <Image
                                            // w="100%" h="350px" 
                                            onClick={() => { navigate(`/gift/single/${ele._id}`) }}
                                            w={["100%", "100%", "100%", "260px", "320px"]} h={["fit-content", "360px", "380px", "310px", "350px"]}
                                            borderRadius={"10px 10px 0px 0px"} src={ele.image[0]} />
                                        <Box p="10px">
                                            <Box w={["200px", "200px", "250px"]}>
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

                                            <Flex alignItems={"center"} gap="10px">
                                                <Text fontWeight={"600"} color={"gray.500"}>{`₹ ${ele.price}`}</Text>
                                                <Text fontWeight={"600"} fontSize="sm" textDecoration={"line-through"} color={"#fa4a65"}>{`₹ ${ele.realPrice}`}</Text>
                                                <Text fontWeight={"600"} fontSize="sm" color={"#fa4a65"}>({percentageDiscount.toFixed(0)}% off)</Text>
                                            </Flex>
                                           
                                            <Flex mt="3%" gap="10px">
                                                <Button
                                                    border={"1px solid black"}
                                                    onClick={()=>handleEdit(ele)}

                                                    _hover={{ bg: "white", color: "#fa4a6f" }}
                                                    fontSize={"sm"}
                                                    bg="white"
                                                >Edit
                                                </Button>

                                                {/* //// */}
                                                <Drawer size={"xl"} onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
          <form onSubmit={handleSubmit}>
    <FormControl>
    {/* title */}
        <FormLabel>TITLE</FormLabel>
        <Input type="text" name="title" value={formData.title} onChange={handleInputChange}/>
        <FormHelperText>Always write title with most searched keywords.</FormHelperText>
        {/* description */}
        <FormLabel>DESCRIPTION</FormLabel>
        <Textarea name="desc" value={formData.description} onChange={handleInputChange}></Textarea>
        {/*discount price */}
        <FormLabel>DISCOUNT PRICE</FormLabel>
        <Input name="discountPrice" value={formData.price} onChange={handleInputChange} type="number" placeholder='Enter Price with discount' />
          {/*real price */}
          <FormLabel>ORIGINAL PRICE</FormLabel>
        <Input name="realPrice" value={formData.realPrice} onChange={handleInputChange} type="number" placeholder='Enter Original price' />
         {/*Size */}
         <FormLabel>SIZE</FormLabel>
        <Input value={formData.size} onChange={handleInputChange} name="size" type="text" placeholder='Enter Original price' />
        <FormHelperText>Write in the format - 24 by 12 Inch</FormHelperText>
         {/*MAKING TIME */}
         <FormLabel>MAKING TIME</FormLabel>
        <Input value={formData.makingTime} onChange={handleInputChange} name="makingTime" type="text" placeholder='Enter Original price' />
        <FormHelperText>Write in the format - 3 to 10 days</FormHelperText>
         {/*DELIVERY TIME */}
         <FormLabel>DELIVERY TIME</FormLabel>
        <Input value={formData.deliveryTime} onChange={handleInputChange} name="deliveryTime" type="text" placeholder='Enter Original price' />
        <FormHelperText>Write in the format - 3 to 10 days</FormHelperText>
        {/* popular */}
        <Box display={"flex"} gap={"20px"}><FormLabel>POPULAR</FormLabel>
        <CheckboxGroup >
        <Checkbox  isChecked={formData.popular} onChange={(e) => handlePopular(e.target.checked)} ></Checkbox>
        </CheckboxGroup>  
        </Box>
        {/* category */}
        <FormLabel>CATEGORY</FormLabel>
        <CheckboxGroup name="category" value={formData.category} onChange={handleCategory}>
            {
                category.map((ele,idx)=>{
                    return(
                        <Checkbox value={ele} name={ele}>{ele}</Checkbox>
                    )
                })
            }
        </CheckboxGroup>
         {/* occasion */}
         <FormLabel>OCCASION</FormLabel>
        <CheckboxGroup  value={formData.occasion} onChange={handleOccasion}>
            {
                occasion.map((ele,idx)=>{
                    return(
                        <Checkbox value={ele} name={ele}>{ele}</Checkbox>
                    )
                })
            }
        </CheckboxGroup>
         {/* tags*/}
         <FormLabel>TAGS</FormLabel>
        <CheckboxGroup value={formData.tags} onChange={handleTags}>
            {
                tags.map((ele,idx)=>{
                    return(
                        <Checkbox value={ele} name={ele}>{ele}</Checkbox>
                    )
                })
            }
        </CheckboxGroup>
        <Input type="submit" onClick={onClose} />





        
    </FormControl>
</form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* ////////// */}
                                                <Button onClick={() => handleDelete(ele._id)}
                                                    color={"gray.600"} _hover={{ bg: "white", color: "#fa4a65" }} bg="pink.50">
                                                    Delete
                                                </Button>
                                            </Flex>
                                        </Box>
                                    </GridItem>
                                )
                            })
                        }

                    </Grid>
                    <Flex m="auto" mt="2%" justifyContent={"center"} gap={"10px"}>
                        {
                            pagination.map((ele, idx) => {
                                return (

                                    <Button color={"white"} onClick={() => setPageNumber(idx + 1)} borderRadius={"50%"} bg={page == idx + 1 ? "black" : "#fa4a6f"} >{idx + 1}</Button>

                                )
                            })
                        }
                    </Flex>
                </Box>
            </Box>

        </>


    )

}