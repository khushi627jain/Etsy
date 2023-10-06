import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,  Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  
    ModalFooter,
    ModalBody, FormControl,
    FormLabel,
    FormHelperText,Box,Text,
    ModalCloseButton,useDisclosure,Button, Input, useToast, Center, Textarea, Checkbox, CheckboxGroup
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export function Dashboard(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const[show,setShow]=useState(true);
    const [newImageUrl, setNewImageUrl] = useState("");
    const [newVideoUrl, setNewVideoUrl] = useState("");
    const navigate=useNavigate()


    const [formData,setFormData]=useState({
        title:"",description:"",category:[],tags:[],occasion:[],
        realPrice:0,price:0,popular:false,image:[],video:[],size:"",deliveryTime:"",makingTime:""
    })

    const token=localStorage.getItem("token")
const toast = useToast()   

useEffect(()=>{
    if(token){
        if (show) {
            onOpen();   
        }
    }
    else{
        alert("Login please for adding product")
        navigate("/")
       }
},[])

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


function checkCode(event){
    event.preventDefault()
    let data=event.target.elements.data.value
   
    if(data=="meghkhush627"){
      
        setShow(false);
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
                  fontStyle:"revert-layer"
                }}
              >
                You can successfully add products.
              </div>
            ),
               
            })
    }
    else{
        toast({
            duration: 2000,
            isClosable: true,
            render: () => (
              <div
                style={{
                  backgroundColor: 'black', // New background color
                  color: 'white', // New text color
                  borderRadius: '10px', // New border radius
                  padding: '15px 25px',
                  fontStyle:"revert-layer"
                }}
              >
                OOPS!! Wrong Code.
              </div>
            ),
               
            })
    }
}

function handleSubmit(e){
e.preventDefault();
    setFormData((prev)=>({...prev,title:e.target.elements.title.value,
        description:e.target.elements.desc.value,
        realPrice:e.target.elements.realPrice.value,
        deliveryTime:e.target.elements.deliveryTime.value,
        makingTime:e.target.elements.makingTime.value,
        price:e.target.elements.discountPrice.value,
        size:e.target.elements.size.value,  
    }))

    let obj={
        title:e.target.elements.title.value,
        description:e.target.elements.desc.value,
        realPrice:e.target.elements.realPrice.value,
        deliveryTime:e.target.elements.deliveryTime.value,
        makingTime:e.target.elements.makingTime.value,
        price:e.target.elements.discountPrice.value,
        size:e.target.elements.size.value,  
        image:formData.image,
        video:formData.video,
        occasion:formData.occasion,
        category:formData.category,
        tags:formData.tags,
        popular:formData.popular,
    }
    if(obj.title==""||obj.description==""||obj.image==[]||
    obj.video==[]||formData.makingTime==""||formData.deliveryTime==""||obj.category==[]||
    formData.price==0||obj.occasion==[]||formData.realPrice==0||formData.size==""||obj.tags==[]){
       alert("Please fill all the required fields")
return;
    }
    axios.post("https://meghkhush-creation-e6ai.onrender.com/gift",obj,{headers:{Authorization:`Bearer ${token}`}})
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
              fontStyle:"revert-layer"
            }}
          >
            Product is successfully added
          </div>
        ),
           
        })})
    .catch(err=>console.log(err))
      
        
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
 function handleImage(){
    if(newImageUrl!="")
            setFormData((prev)=>({...prev,image:[...prev.image,newImageUrl]}))
            setNewImageUrl("")
        }
function handleVideo(){
    if(newVideoUrl!="")
            setFormData((prev)=>({...prev,video:[...prev.video,newVideoUrl]}))
            setNewVideoUrl("")
        }


    return(
        <>
             
<Modal isOpen={isOpen} >
  <ModalOverlay />
  <ModalContent pl="20px" pr="20px">
    <ModalHeader>Enter your secret code to add a product</ModalHeader>
    <form onSubmit={checkCode} style={{display:"flex",gap:"10px"}}>
      <Input border={"2px solid #fa4a56"} name="data" placeHolder='SECRET CODE' />
      <Button variant='solid' boxShadow={"dark-lg"} bg="#fa4a65" color="white" _hover={{ color: "#fa4a65", "bg": "white", border: "2px solid #fa4a65" }} type="submit">Submit</Button>
    </form>
 
  
    <ModalFooter m="auto">
    <Center><Button w="100%" variant='solid' boxShadow={"dark-lg"} bg="#fa4a65" color="white" _hover={{ color: "#fa4a65", "bg": "white", border: "2px solid #fa4a65" }} isDisabled={show}  mr={3} onClick={onClose}>
        Close
      </Button></Center>
      

     
    </ModalFooter>
  </ModalContent>
</Modal>

<Button mt="20px" onClick={()=>navigate("/edit")}>Show All Products</Button>

<Box w="80%" m="auto" textAlign={"left"}>

<form onSubmit={handleSubmit}>
    <FormControl>
    {/* title */}
        <FormLabel>TITLE</FormLabel>
        <Input type="text" name="title" placeholder='Enter Title'/>
        <FormHelperText>Always write title with most searched keywords.</FormHelperText>
        {/* description */}
        <FormLabel>DESCRIPTION</FormLabel>
        <Textarea name="desc"></Textarea>
        {/* image */}
        <FormLabel>IMAGE</FormLabel>
        <Box display={"flex"} gap={"20px"}>
        <Input type="url" name="image" value={newImageUrl} onChange={(e)=>setNewImageUrl(e.target.value)} placeHolder="https://example.com/image.jpg"/>
        <Button onClick={handleImage}>+</Button>
        </Box>
        
         {/* video */}
         <FormLabel>VIDEO</FormLabel>
         <Box display={"flex"} gap={"20px"}>
        <Input type="url" name="video" value={newVideoUrl} onChange={(e)=>setNewVideoUrl(e.target.value)} placeHolder="https://example.com/image.jpg"/>
        <Button onClick={handleVideo}>+</Button>
        </Box>
        {/*discount price */}
        <FormLabel>DISCOUNT PRICE</FormLabel>
        <Input name="discountPrice" type="number" placeholder='Enter Price with discount' />
          {/*real price */}
          <FormLabel>ORIGINAL PRICE</FormLabel>
        <Input name="realPrice" type="number" placeholder='Enter Original price' />
         {/*Size */}
         <FormLabel>SIZE</FormLabel>
        <Input name="size" type="text" placeholder='Enter Size' />
        <FormHelperText>Write in the format - 24 by 12 Inch</FormHelperText>
         {/*MAKING TIME */}
         <FormLabel>MAKING TIME</FormLabel>
        <Input name="makingTime" type="text" placeholder='Enter Making time' />
        <FormHelperText>Write in the format - 3 to 10 days</FormHelperText>
         {/*DELIVERY TIME */}
         <FormLabel>DELIVERY TIME</FormLabel>
        <Input name="deliveryTime" type="text" placeholder='Enter Delivery time' />
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
        <Input type="submit" />





        
    </FormControl>
</form>

</Box>





        </>
    )
}