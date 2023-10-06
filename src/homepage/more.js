import {
    Box, Button, Flex, Text, Image, Spacer,
    Card, CardHeader, CardBody, CardFooter, Grid, Stack, Heading, Divider, ButtonGroup,
  
    Center,
    GridItem,
  } from '@chakra-ui/react';
  import { Link, useNavigate } from 'react-router-dom';
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';
  import { faStar } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import "./style.css"
  import {LiaHandPointRightSolid} from "react-icons/lia"
  import {BsEmojiSmile} from "react-icons/bs"
import { useEffect,useRef } from 'react';


export function CommentBox() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
       
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
         slidesToSlide: 3  
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
         slidesToSlide: 3  
      }
    };

const comment=[
  {
    description:"Gift was so amazing.I literally cried!Thanku so much for the lovely gift. ",
    video:"https://i.imgur.com/jTYKWFM.mp4",
    image:"",
    id:"comment1",
  },
  {
    description:"Magic in your hands. This is so beautiful.",
    image:"https://i.imgur.com/1WmHpqX.jpg",
    id:"comment2",
  },
  {
    description:"Great looks beautiful thanks alott. appreciate your work..Keep up the Great work you do and hope you get the success you need ",
    image:"https://i.imgur.com/zWMGs0g.jpg", id:"comment3",
  },
  {
    description:"Seriously there is no word to praise. Bhabhi ki lines gift dikhte wakt.Thanku so much.",
    image:"https://i.imgur.com/uwM6LDU.jpg", id:"comment4",
  },
  {
    description:"Very nice ..Lag hi nhi rha tha ki handmade he",
    image:"https://i.imgur.com/BVQwHKh.jpg", id:"comment5",
  },
  {
    description:"Hey.. the card was very beautiful..both bhai bhabhi loved it.Thanks..",
    video:"https://i.imgur.com/VkV0BTj.mp4",image:"", id:"comment6",
  },
  {
    description:"That was so perfect.He loved so so much.Thank you so much.",
    video:"https://i.imgur.com/kXhIKDO.mp4",image:"", id:"comment7",
  },
  {
    description:"Can't thank you enough for this beautiful Namokar Mantra Frame.Exactly what shown is delivered.",
    video:"https://i.imgur.com/h0tFsv3.mp4",image:"", id:"comment8",
  },
  {
    description:"Ones asking me bout my Name Plate, I got this one also done from @meghkhush_creation .In love with her work ,soo perfect at it . Exactly what I asked for .",
    video:"https://i.imgur.com/59zk9YG.mp4",image:"", id:"comment9",
  },
  {
    description:"Thanku uuh dii bahout acha tha boxx😍😍🤗🤗😘😘 ,Cards ayagye sare usme.",
    video:"https://i.imgur.com/KFGrCqs.mp4",image:"", id:"comment10",
  },{
    description:"That gift was so cute🤗. He loved😍 so much Thank You so much.",
    video:"https://i.imgur.com/zBDEUp4.mp4",image:"", id:"comment11",
  },
  {
    description:"Sorry I was nervous at first but did your best yr 🥰. You are so cooperative 🥰.",
    video:"https://i.imgur.com/4s6Xbps.mp4",image:"", id:"comment12",
  }

]

function handleMouseEnter(id){
  let comments=document.getElementById(id);
  comments.style.transform='scale(3)'
  comments.style.margin = '-35px'
}
function handleMouseLeave(id){
  let comments=document.getElementById(id);
  comments.style.transform='scale(1)'
}
    return (
      <Box>
      <Box w="90%" bg="#fde1e8" m="auto" mb="50px"  display={"flex"} justifyContent={"space-between"}>
        <Box display={"grid"} alignItems={"center"} w="55%" p={["10px", "15px", "40px"]}>
          <Heading
          //  display={["none", "grid"]} 
           color="#333f48" w="90%" textAlign={"left"} fontSize={["md", "2xl", "2xl", "3xl", "4xl"]} >
            WHAT CUSTOMERS SAY
            <Text as="span" color="#fa4a65"> ABOUT US</Text>
          </Heading>
          <Text fontSize={["md", "sm", "sm", "xl"]}
            textAlign={"left"} display={["none","","","flex","flex"]} color="gray" fontWeight={"500"}>
            See and discover what customers tell us about their gifting experience with us, we always listen to our coustomers requirement
          </Text>
          <Carousel
            arrows={true} renderButtonGroupOutside={true}
            swipeable={true}
            draggable={true}
            // showDots={true}
            
            responsive={responsive}
            ssr={true} 
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
  
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-width-80-%"
          >
{
  comment.map((ele,idx)=>{
    return(
      <>
      <Box key={idx} p="10px" columnGap={"20px"} h={["140px","150px","180px"]}  bg="white"  justifyContent={"space-between"} alignItems={"center"} borderRadius={"20px"} display="flex">
              <Box   
              //  display={["none", "none", "none", "grid"]}
               >
                <Text  w={["80%","90%"]} textAlign={"left"} ml="3%" fontStyle={"italic"} color="gray" overflow={"hidden"} textOverflow={"ellipsis"} 
                fontSize={["sm","lg"]}>
                  "{ele.description}"
                </Text>
  
                <Flex  mt="1%" ml={["10px","","3%","3%"]}>
                  <FontAwesomeIcon icon={faStar} style={{ color: '#fa4a65' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#fa4a65' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#fa4a65' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#fa4a65' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: '#fa4a65' }} />
                </Flex>
                </Box>            
           
      <Box display={["none","none", "block"]}  m="10px" justifyContent={"center"} > {
                  ele.image===""?
                  <video  style={{width:"150px",height:"150px",transition:"transform 1s ease"}} id={ele.id} 
                  onMouseEnter={()=>handleMouseEnter(ele.id)}
                  onMouseLeave={()=>handleMouseLeave(ele.id)} src={ele.video} />: 
                  <Image w="auto" h={["150px","150px"]}
                  id={ele.id} 
                  style={{transition:"transform 1s ease"}} 
                  onMouseEnter={()=>handleMouseEnter(ele.id)}
                  onMouseLeave={()=>handleMouseLeave(ele.id)}
                
                   src={ele.image} alt="comment-image" />
                }
               </Box>
               </Box>
      </>
     
    )
  })
}

           
          
          </Carousel>
  
        </Box>
        <Box w="45%" borderRadius={"30px"} >
  <Box w="100%">
    <Image
      ml="auto"  
      borderBottomLeftRadius={"50%"}
      borderTopLeftRadius={"50%"}
      right={"0px"}
      w={["100%","100%","70%","100%","70%"]} h="100%"
      src="https://i.imgur.com/uXw228N.jpg"
    />
  </Box>
</Box>

      </Box>
      </Box>
    )
    }

  export function SubscribePart() {

    const navigate=useNavigate();
    return (

        <>
<Box display={"flex"} w="90%" h="70%" m=" 40px auto" >
<Box w={["50%","30%"]} >
    <Image src="https://i.imgur.com/2FeXT1b.jpg" h="100%" />
</Box>
<Box  display={"grid"} alignItems={"center"} w={["50%","70%"]} bg="pink.50"  p={["20px", "30px","0px","0px", "80px"]}  >
        <Heading fontFamily={"serif"} fontSize={["15px", "20px", "30px", "35px", "40px"]}>GET STARTED WITH<Text color="#fa4a65">MEGHKHUSH CREATION</Text></Heading>
      <Box display={["none","none","block"]}>
      <Text color={"pink.400"}  fontWeight={"600"} fontSize={["12px", "15px", "17px"]}>
          <Text>Follow us and find super attractive price quotes</Text>
          <Text>from us, we wait for you at the best gift selection</Text>
        </Text>
      </Box>
       
        <Grid alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"} display={"flex"} gap={"10px"}>
        <GridItem display={"flex"}  >
          <Image w="20px" src="https:ak-d.tripcdn.com/images/0AS5f120008whj34f2145.png" />
          <Text ml="6px" fontSize={["x-small","sm","md"]} textDecoration={"underline"} textDecorationLine={"underline"} textDecorationStyle="dashed" paddingBottom="2px" textUnderlineOffset={"7px"}>Budget-Friendly</Text>
        </GridItem> 
        <GridItem display={"flex"} >
          <Image w={["15px","20px"]} src="https:ak-d.tripcdn.com/images/0AS6o120009gxfriv28B3.png" />
          <Text ml="6px"  fontSize={["x-small","sm","md"]}  textDecoration={"underline"} textDecorationLine={"underline"} textDecorationStyle="dashed" paddingBottom="2px" textUnderlineOffset={"7px"}>Booking Guarantee</Text>
        </GridItem>
        <GridItem display={"flex"}>
          <Image w="20px" src="https:ak-d.tripcdn.com/images/0AS2j120009gxknwsA052.png" />
          <Text ml="6px" fontSize={["x-small","sm","md"]}  textDecoration={"underline"} textDecorationLine={"underline"} textDecorationStyle="dashed" paddingBottom="2px" textUnderlineOffset={"7px"}>High-quality gifts</Text>
        </GridItem>
      </Grid>

        <Button m="auto" fontSize={["small","medium"]}
        onClick={()=>navigate("/gift")}
         w={["70%","50%","30%"]} pt={"0px"} pb="0px" variant='solid' mt="3%" boxShadow={"dark-lg"} bg="#fa4a65" color="white" _hover={{ color: "#fa4a65", "bg": "white", border: "2px solid #fa4a65" }}>
          Get Started 
        </Button>
  
      </Box>
</Box>


        </>
     
    )
  }

  export function Rewards(){
    return(
      <>
      <Box  borderTop={"2px solid gray"}  ></Box>
<Box display={"grid"} rowGap={"30px"} justifyContent={"center"} m={"auto"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(4,1fr)"]}
        w="100%"  pt="40px" pb="40px"  >
      <Box display={"flex"}  gap={"20px"}>
          <Image h="100px" w="100px" src="https:www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/rewards-images/rewards-refresh-2022/secondary-footer/free_shipping.svg" alt="box" />
      <Box w={["70%","50%"]}>
          <h4>Free Shipping for some Members</h4>
          <p>Plus, 10% off at your second purchase</p>
      </Box>
      <Box display={["none","block","","",""]} borderLeft={"2px solid gray"}  height={"100px"}></Box>
      </Box>
      
     
      <Box display={"flex"}  gap={"20px"}>
          <Image h="100px" w="100px" src="https:www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/footer/gift-card.svg" alt="box" />
      <Box w={["70%","50%"]}>
          <h4>Famous Gift Cards</h4>
          <p>You can add on free gift cards in your purchase.</p>
      </Box>
      <Box display={["none","","block","",""]} borderLeft={"2px solid gray"}  height={"100px"}></Box>
      </Box>

    
      <Box display={"flex"} gap={"20px"}>
          <Image h="100px" w="100px" src="https:www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/footer/ff-pickup.svg" alt="box" />
      <Box w={["70%","50%"]}>
          <h4>MeghKhush Creation Fast Delivery</h4>
          <p>Order online, delivery asap. Plus, free gifts!</p>
      </Box>
      <Box display={["none","block","none","block","block"]} borderLeft={"2px solid gray"}  height={"100px"}></Box>
      </Box>

     
      <Box  display={"flex"} gap={"20px"}>
          <Image h="100px" w="100px" src="https:www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/footer/zip.svg" alt="box" />
      <Box w={["70%","50%"]}>
      <h3>Flexible Payment Options</h3>
      <p>Your preferred payment method, our pleasure to accept.</p>
      </Box>
      </Box>
     </Box>
      </>
      
     
    )
  }

  export function Order(){
  
   
  
    return(
      <Box
      display="grid"
      gridTemplateColumns={["repeat(1,1fr)", "","", "repeat(2,1fr)", ""]}
      m="2% auto"
      w="90%"
      p="auto"
     
      height="auto"
      gap={["1%","","","0px"]}
    >
      <Box
        h="100%" // Set the height of the first box to 100% to match the second box
        
        pb="20px"
        bgImage="https://i.pinimg.com/564x/24/1c/f3/241cf3a147e57bba2cd59b2b57eaba3a.jpg"
        pt="30px"
        textAlign="center"
        justifyContent={"center"} alignItems={"center"}
      >
        <Heading
          display="flex"
          justifyContent="center"
          fontSize="3xl"
          color="brown"
          fontFamily="serif"
          mb={2}
        >
          <span
            style={{
              color: "#fa4a65",
              fontWeight: "1000",
              marginRight: "10px",
            }}
          >
            <BsEmojiSmile />
          </span>
          Order from Us Today!
          <span
            style={{
              color: "#fa4a65",
              fontWeight: "1000",
              marginLeft: "10px",
            }}
          >
            <BsEmojiSmile />
          </span>
        </Heading>
        <Text fontSize="lg" mb={4} color="gray.600">
          Your one-stop destination for the finest products
        </Text>

        <Box>
          <Heading color="#465d6f" fontFamily="serif" fontSize="2xl" mb={2}>
            **How to Order:**
          </Heading>
          <Text fontSize="md" color="gray.600">
            <Text fontWeight="bold">Step 1:</Text> Browse our website and find
            the product you love.
            <Text mt="1%" fontWeight="bold">
              Step 2:
            </Text>{" "}
            Send us the image of the product through one of the following
            platforms:
            <Box
              display="grid"
              justifyContent="center"
              m="auto"
              w="70%"
              textAlign="left"
            >
              <li style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{ marginRight: "10px", fontWeight: "1000" }}
                >
                  <LiaHandPointRightSolid
                    fontWeight={1000}
                    fontSize={"25px"}
                  />
                </span>
                WhatsApp:{" "}
                <Text textDecoration="underline">
                  &nbsp;<Link to="https://api.whatsapp.com/send?phone=9057589580">+91 9057589580</Link>
                </Text>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{ marginRight: "10px", fontWeight: "1000" }}
                >
                  <LiaHandPointRightSolid
                    fontWeight={1000}
                    fontSize={"25px"}
                  />
                </span>
                Instagram:{" "}
                <Text textDecoration="underline">
                  &nbsp;<Link to="https://www.instagram.com/meghkhush_creation/">@meghkhush_creation</Link>
                </Text>{" "}
              </li>
            </Box>

            <Text mt="1%" fontWeight="bold">Step 3:</Text> We'll get in touch
            with you to finalize the order and discuss any customization
            options.

            <Text mt="1%" fontWeight="bold">
              Step 4:
            </Text>{" "}
            To confirm the order, make a payment of 3/4th of the total amount.
            <Text>The remaining payment has to be made at the time of dispatch.</Text>
          </Text>
        </Box>

        <Flex mt="2%" justify="center">
          <Button
            fontFamily="sans-serif"
            variant="solid"
            fontSize="lg"
            boxShadow="dark-lg"
            bg="#fa4a65"
            color="white"
            _hover={{ color: "#fa4a65", bg: "white", border: "2px solid #fa4a65" }}
          >
            Ordered Successfully!!
          </Button>
        </Flex>
      </Box>

      <Box mb={["20px","","","0px"]} height={["500px","500px","400px","570px","550px"]}  >
        <video
          controls
          poster="https://i.imgur.com/5EmTqLu.jpg"
          style={{ width: "100%", height: "100%", border: "none" }}
        >
          <source src="https://i.imgur.com/6G5gtLv.mp4" type="video/mp4" />
          <source src="https://i.imgur.com/6G5gtLv.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
    
    )
  }


