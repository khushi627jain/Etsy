import {
  Heading, Input, Tooltip, Popover,
  PopoverTrigger, PopoverContent,  PopoverHeader, PopoverBody, Text,PopoverFooter,PopoverArrow,
  PopoverCloseButton, Button, ButtonGroup, Box,Stack,InputGroup,InputLeftAddon,InputRightAddon,Select,Textarea,
  PopoverAnchor,useToast,Drawer, DrawerBody,DrawerFooter,  DrawerHeader, DrawerOverlay,DrawerContent,DrawerCloseButton,
 Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, Spacer, useDisclosure, Center
} from "@chakra-ui/react";
import './navbar.css'

import {IoIosArrowForward} from "react-icons/io"
import React, { useEffect, useRef, useState } from "react";
import { MdReviews } from "react-icons/md"
import { GoCodeReview } from "react-icons/go"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import {GiHamburgerMenu} from "react-icons/gi" 
import {MdOutlineSubject} from "react-icons/md"

export default function Navbar() {



  const initialFocusRef = React.useRef()
const navigate=useNavigate();
const dispatch=useDispatch()
const toast = useToast()

  const [isOpenBox, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const[name,setName]=useState("")
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const[userName,setUsername]=useState("");
  const[searchValue,setSearchValue]=useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const firstField = React.useRef()



useEffect(()=>{
  
  const token=localStorage.getItem("token")
  if(token){
    axios
    .get("https://meghkhush-creation-e6ai.onrender.com/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res=>{
      dispatch({ type: "setName", payload: res.data.data.name })
      setUsername(res.data.data.name);
    })
  }
 
},[userName])

  const handleOpenLogin = () => {
    setIsOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setIsOpenLogin(false);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
 
        const formData = {
            email: loginEmail,
            password: loginPassword,
        };
        if (loginEmail === "" || loginPassword === "") {
            alert("Please fill all fields");return;
          }
          
        axios.post("https://meghkhush-creation-e6ai.onrender.com/login",formData)
        .then(res=>{
       
            if(res.status==204){
             
                toast({
        
                  duration: 4000,
                  isClosable: true,
                  position:"top",
                  render:()=>(
                    <Box
                    style={{
                      backgroundColor: '#333f48', // New background color
                      color: 'white', // New text color
                      borderRadius: '10px', // New border radius
                      padding: '15px 25px',
                      fontStyle:"revert-layer",
                      justifyContent:"center",
                      textAlign:"center",
                      margin:"auto",
                      alignItems:"center"
                    }}
                  >
                  Signup first, this email dosen't exist
                  </Box>
                )
                })
              
            }
            else if(res.status==203){
              toast({
        
                duration: 4000,
                isClosable: true,
                position:"top",
                render:()=>(
                  <Box
                  style={{
                    backgroundColor: '#333f48', // New background color
                    color: 'white', // New text color
                    borderRadius: '10px', // New border radius
                    padding: '15px 25px',
                    fontStyle:"revert-layer",
                    justifyContent:"center",
                    textAlign:"center",
                    margin:"auto",
                    alignItems:"center"
                  }}
                >
                Invalid Credentials
                </Box>
              )
              })
            
            }
            else if(res.status==200){
                localStorage.setItem("token",res.data.token);
                toast({
        
                  duration: 4000,
                  isClosable: true,
                  render:()=>(
                    <Box
                    style={{
                      backgroundColor: '#fa4a6f', // New background color
                      color: 'white', // New text color
                      borderRadius: '10px', // New border radius
                      padding: '15px 25px',
                      fontStyle:"revert-layer",
                      justifyContent:"center",
                      textAlign:"center",
                      margin:"auto"
                    }}
                  >
                    SUCCESSFULLY LOGIN
                  </Box>
                )
                })
                axios
                .get("https://meghkhush-creation-e6ai.onrender.com/user", {
                  headers: { Authorization: `Bearer ${res.data.token}` },
                })
                .then(res=>{
                    setUsername(res.data.data.name)
                })
               
            
            }})
            
            setName("")
            setEmail("")
             setPassword("")
             setLoginEmail("")
             setLoginPassword("")

    handleCloseLogin();
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    handleOpenLogin()
    setIsOpen(false);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phone,
  };
  if (email === "" || password === ""||name===""||phone==="") {
      alert("Please fill all fields");return;
    }
  axios.post("https://meghkhush-creation-e6ai.onrender.com/signup",formData)
  .then(res=>{
      if(res.data=="Email already exists"){
        toast({
        
          duration: 4000,
          isClosable: true,
          position:"top",
          render:()=>(
            <Box
            style={{
              backgroundColor: '#333f48', // New background color
              color: 'white', // New text color
              borderRadius: '10px', // New border radius
              padding: '15px 25px',
              fontStyle:"revert-layer",
              justifyContent:"center",
              textAlign:"center",
              margin:"auto",
              alignItems:"center"
            }}
          >
          Email already exists
          </Box>
        )
        })  
      }
      else 
      {
        toast({
        
          duration: 4000,
          isClosable: true,
          render:()=>(
            <Box
            style={{
              backgroundColor: '#fa4a6f', // New background color
              color: 'white', // New text color
              borderRadius: '10px', // New border radius
              padding: '15px 25px',
              fontStyle:"revert-layer",
              justifyContent:"center",
              textAlign:"center",
              margin:"auto"
            }}
          >
            SUCCESSFULLY SIGNUP
          </Box>
        )
        })
      }
     
      
      })
      .catch(err=>console.log(err))
      setEmail("");setPassword("");setPhone("");    



    handleClose();
   
   
  };

  function basketHandel(){
    let token=localStorage.getItem("token")
    if(token) navigate("/cart")
    else {
      toast({
        
        duration: 4000,
        isClosable: true,
        position:"top",
        render:()=>(
          <Box
          style={{
            backgroundColor: '#333f48', // New background color
            color: 'white', // New text color
            borderRadius: '10px', // New border radius
            padding: '15px 25px',
            fontStyle:"revert-layer",
            justifyContent:"center",
            textAlign:"center",
            margin:"auto",
            alignItems:"center"
          }}
        >
        Please login for accessing the cart products
        </Box>
      )
      })
    
      handleOpenLogin()
    }
  }

  function wishlistHandel(){
    let token=localStorage.getItem("token")
    if(token) navigate("/wishlist")
    else {
      toast({
        
        duration: 4000,
        isClosable: true,
        position:"top",
        render:()=>(
          <Box
          style={{
            backgroundColor: '#333f48', // New background color
            color: 'white', // New text color
            borderRadius: '10px', // New border radius
            padding: '15px 25px',
            fontStyle:"revert-layer",
            justifyContent:"center",
            textAlign:"center",
            margin:"auto",
            alignItems:"center"
          }}
        >
        Please login first for accessing the wishlist products
        </Box>
      )
      })
    
      handleOpenLogin()
    }
  }

function logOut(){
  localStorage.removeItem("token");setUsername("");
 
        toast({
        
          duration: 4000,
          isClosable: true,
          render:()=>(
            <Box
            style={{
              backgroundColor: '#fa4a6f', // New background color
              color: 'white', // New text color
              borderRadius: '10px', // New border radius
              padding: '15px 25px',
              fontStyle:"revert-layer",
              justifyContent:"center",
              textAlign:"center",
              margin:"auto"
            }}
          >
            You are successfully logout
          </Box>
        )
        })
    
  
}

function search(){

  
  navigate(`/search/${searchValue}`)
  setSearchValue("")

}


  return (
    <>

      <Box className="navbar">
        <Box gap={["5px","20px","0px"]} className="navbar-1">
          <Box className="logo-etsy">
            <Heading cursor={"pointer"} color="#fa4a6f" onClick={()=>navigate("/")} fontFamily={"cursive"}
             fontSize={["2xl","4xl"]} >
             MeghKhush</Heading>
          </Box>
          <Box display={["none","none","flex"]} className="searchBar">
            <Box className="search-input-box">
              <Input onKeyPress={(e)=>{if(e.key=="Enter") search()}} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} border={"none"} _focus={{ boxShadow: 'none', }} _hover={{ border: 'none' }} placeholder="Search for anything" />
            </Box>
            <Box className="search-logo" >
              <i onClick={search} class="fa-solid fa-magnifying-glass"></i>
            </Box>
          </Box>
          <Spacer display={["block","block","none"]}/>
          <Tooltip hasArrow label='Favourites' bg='#333f48' p="10px" borderRadius={"10px"} color='white'>
            <Box onClick={wishlistHandel} className="favourite">
              <i id="navbar-logo" class="fa-regular fa-heart"></i>
            </Box>
          </Tooltip>

          <Box className="updates">
            <Tooltip hasArrow label='Updates' bg='#333f48' p="10px" borderRadius={"10px"} color='white'>
              <i id="navbar-logo" class="fa-sharp fa-regular fa-bell"></i>
            </Tooltip>

            <Popover pt="10px" pb="70px">
              <PopoverTrigger>
                <i class="fa-solid fa-caret-down"></i>
              </PopoverTrigger>
              <PopoverContent bg='white' color='black' pt="10px" pb="70px" outline={"none"}>
                <PopoverHeader fontWeight='semibold'>Updates</PopoverHeader>
                <PopoverArrow bg='white' />
                {/* <PopoverCloseButton bg='purple.500' /> */}
                <PopoverBody pt="10px" pb="10px" textAlign={"left"} bg="#f4f4f4" _hover={{ bg: "#d4d4d4", border: "none" }} border="none">
                  <Text>Your first update!</Text>
                  Look here for updates on items and shops you've favourited – sales, new products and more.
                </PopoverBody>
              </PopoverContent>
            </Popover>


          </Box>


          <Box className="account">
            <Tooltip hasArrow label='Your Account' bg='#333f48' p="10px" borderRadius={"10px"} color='white'>
              <Box className="profile-user">
                <i id="navbar-logo" class="fa-sharp fa-solid fa-user"></i>
              </Box>
            </Tooltip>

            <Popover
              initialFocusRef={initialFocusRef}
              placement='bottom'
              closeOnBlur={true}
              w="100%"
            >
              <PopoverTrigger>
                <i class="fa-solid fa-caret-down"></i>
              </PopoverTrigger>
              <PopoverContent border={"none"} color='black' bg='white' w="100%" >
                <PopoverHeader pt={4} border='0' _hover={{ bg: "#d3d3d3" }} >
                  <PopoverArrow bg='white' />
                  <Box mt="15px" gap={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box>
                      <Box className="profile-user">
                        <i id="navbar-logo" class="fa-sharp fa-solid fa-user"></i>
                      </Box>
                    </Box>
                    <Box>
                      {/* <Text>Deepshikha Jain</Text>
                      <Text>View Your Profile</Text> */}
                      <Text>{userName}</Text>
                    </Box>
                  </Box>
                  <Box>
                    <Link to="/dashboard">DASHBOARD</Link>
                  </Box>
                </PopoverHeader>
                <PopoverArrow bg='blue.800' />
                <PopoverCloseButton />
                <PopoverBody w="100%" m="auto" justifyContent={"center"} textAlign={"center"} border={"none"} p="0px">
                  <Box _hover={{ bg: "#d3d3d3" }} alignItems="center" justifyContent={"center"} pt="10px" display={"flex"} m="auto" >
                    <Box alignItems="center" justifyContent={"center"}  display={"flex"}>
                      <Link to="">
                        <GoCodeReview fontSize={"30px"} />
                      </Link>
                    </Box>
                    <Box alignItems="center" justifyContent={"center"}  display={"flex"}>
                      <Link to="">
                        <Text align={"center"} onClick={logOut}>Log Out</Text>
                      </Link>
                    </Box>
                  </Box>
                </PopoverBody>
                <PopoverFooter
                  border='0'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  pb={4}
                >

                </PopoverFooter>
              </PopoverContent>
            </Popover>



          </Box>

          <Box onClick={basketHandel} className="basket">
            <Tooltip hasArrow label='Basket' bg='#333f48' p="10px" borderRadius={"10px"} color='white'>
              <i id="navbar-logo" class="fa-sharp fa-solid fa-basket-shopping"></i>
            </Tooltip>

          </Box>

        </Box> 
        {/* another search bar */}
        <Box display={["flex","flex","none"]}
        justifyContent={"space-between"} alignItems={"center"} gap={"20px"}>
       
         {/* hamburger */}
      

{/* ////////// */}

   <Button bg="white" _hover={{backgroundColor:"white"}} onClick={onOpen}>
   <MdOutlineSubject size={"40px"} />  
      </Button>
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
              <Center fontWeight={500} fontSize={"2xl"}>  Browse Categories</Center>
<Box  mt="25px" >
  <Box cursor={"pointer"} onClick={()=>navigate(`/search/bouquet`)} mt="15px" mb="15px" alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Combos & Hamper</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate(`/search/birthday`)}  mt="15px" mb="15px" alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Birthday</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate("/search/decor")}  mt="15px" mb="15px" alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Home Decor</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate("/search/Personalized")}  mt="15px" mb="15px" alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Personalised</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate("/search/wedding")}  mt="15px" mb="15px" alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Wedding & Party</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate("/search/frame")}  mt="15px" mb="15px"  alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Frames</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate("/search/nameplate")}  mt="15px" mb="15px"  alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>NamePlates</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"} onClick={()=>navigate("/gift")}   mt="15px" mb="15px" alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
    <Text fontWeight={500} fontSize={"md"}>Gifts</Text>
    <IoIosArrowForward size={"20px"} fontWeight={1000} />
  </Box>

  <Box cursor={"pointer"}  mt="15px" mb="15px"  alignItems={"center"} display={"flex"} justifyContent={"space-between"}>
  <a href="#" style={{fontSize:"20px",color:"#fa4a6f"}}  onClick={()=>{onClose();handleOpen()}} className="name-tag">{userName==""?`Sign Up/Login`:userName}</a>
  </Box>
</Box>               

            
      
           
              </Box>
            </Stack>
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
{/* ///////// */}


        {/* search bar */}
        <Box borderRadius={"50px"} border={"2px solid black"} 
        display={"flex"} alignItems={"center"}  justifyContent={"space-between"}
      w="100%"   p="0px 20px 0px 10px" mt="5px"
        bg="#f4f4f4">
            <Box >
              <Input onKeyPress={(e)=>{if(e.key=="Enter") search()}} 
             value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
               border={"none"} _focus={{ boxShadow: 'none', }} _hover={{ border: 'none' }} placeholder="Search for anything" />
            </Box>

            <Box className="search-logo" >
              <i onClick={search} class="fa-solid fa-magnifying-glass"></i>
            </Box>
          </Box>
        

        </Box>

        <Box display={["none","none","block"]} className="navbar-2">


          <ul className="nav-link">
            {/* 1st Box */}
            <li  className="main-box">
              <a onClick={()=>navigate("/search/bouquet")} className="name-tag">Combos & Hamper</a>
              <Box className="hidden-box"></Box>

            </li>
            {/* 2nd Box */}

            <li className="main-box">
              <a onClick={()=>navigate("/search/birthday")}  className="name-tag">Birthday</a>
              <Box  className="hidden-box">
             
              </Box>
            </li>
            {/* 3rd Box */}
            <li className="main-box">
              <a onClick={()=>navigate("/search/home")} href="/nameplate" className="name-tag">Home Decor</a>
              <Box className="hidden-box"></Box>

            </li>
            {/* 4th Box */}
            <li className="main-box">
              <a  onClick={()=>navigate("/search/Personalized")} className="name-tag">Personalised</a>
              <Box className="hidden-box"></Box>

            </li>
            {/* 5th Box */}
            <li className="main-box">
              <a  onClick={()=>navigate("/search/wedding")} className="name-tag">Wedding & Party</a>
              <Box className="hidden-box"></Box>

            </li>
            {/* 6th Box */}
            <li className="main-box">
              <a  onClick={()=>navigate("/search/frame")} className="name-tag">Frames</a>
              <Box className="hidden-box"></Box>

            </li>
            {/* 7th Box */}
            <li 
          
            className="main-box">
              <a href="#"   onClick={handleOpen} className="name-tag">{userName==""?`Sign Up/Login`:userName}</a>

      <Modal isOpen={isOpenBox} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl id="email" isRequired>
              <Button colorScheme="blue" mb="10px" onClick={handleClose}>LOGIN</Button>
                <FormLabel>Email:</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password:</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone Number:</FormLabel>
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel>Name:</FormLabel>
                <Input type="name" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>Sign Up</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenLogin} onClose={handleCloseLogin}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmitLogin}>
            <ModalBody>
              <FormControl id="loginEmail" isRequired>
                <FormLabel>Email:</FormLabel>
                <Input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </FormControl>
              <FormControl id="loginPassword" isRequired>
                <FormLabel>Password:</FormLabel>
                <Input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>Login</Button>
              <Button onClick={handleCloseLogin}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
            </li>
            {/* 8th Box */}
            <li className="main-box">
              <a  href="/nameplate" onClick={()=>navigate("/nameplate")} className="name-tag">NamePlates</a>
              <Box className="hidden-box"></Box>

            </li>
            {/* 9th Box */}
            <li className="main-box">
              <Link to="/gift" className="name-tag">Gifts</Link>
              <Box className="hidden-box"></Box>

            </li>

          </ul>
        </Box>



      </Box>
      <hr style={{ marginTop: "10px" }} />
    </>
  )
}