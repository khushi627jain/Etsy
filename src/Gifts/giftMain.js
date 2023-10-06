import { Box,Center,Heading,Image, Tag,Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function GiftMain(){



  const [arr,setArr]=useState([])
  const navigate=useNavigate()

useEffect(()=>{
    axios.get("https://meghkhush-creation-e6ai.onrender.com/gift/all")
    .then(res=>{
setArr(res.data.data)
    })
    .catch(err=>console.log(err))


},[])


    const responsive = {
      largeDesktop: {
        breakpoint: { max: 1600, min: 1000 },
        items: 5,
        slidesToSlide: 5,
      },
      desktop: {
        breakpoint: { max:1200, min: 920},
        items: 4,
        slidesToSlide: 4,
      },
      tablet: {
        breakpoint: { max: 920, min: 700 },
        items: 3,
        slidesToSlide: 3,
      },
      mobile: {
        breakpoint: { max: 700, min: 400 },
        items: 2,
        slidesToSlide: 2,
      },
      smallMobile: {
        breakpoint: { max: 400, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },    
      };

   

    return(
<Box position={"relative"} m="auto" >

<Carousel
  swipeable={true}
  draggable={true}
  focusOnSelect={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"

>
  {
    arr.map((ele,idx)=>{
      
        return(
          <Center>
          <div  key={idx} style={{ margin:0, padding: 0,position:"relative",justifyContent:"center" }} >
          <Tag   top={2} p="10px 20px 10px 20px"
              borderRadius={"20px"}  left={[3,2]} position={"absolute"} zIndex={"1"} display={"flex"} justifyContent={"flex-start"} bg="white"  ><Text>{`₹ ${ele.price}`}</Text></Tag>
          <Center> <Image onClick={()=>{navigate(`/gift/single/${ele._id}`)}} h={["300px","350px"]} src={ele.image} /></Center>
         
        </div>
          </Center>
         
        )
      
      
    })
  }
</Carousel>


<Box
  position={"absolute"}
    mt="-70px" 
  left={["23%","30%","33%","35%"]} right={["23%","30%","33%","35%"]}
    zIndex={2}
  borderRadius={"30px"}
    bg="white"
    pt="10px" 
    textAlign="center" 
 fontStyle={"revert-layer"}>
  <Text fontSize={["md","xl","2xl","4xl","4xl"]} fontWeight={["600","500","500","400","400"]}>The MeghKhush Creation Guide</Text>
  <Text >We searched far and wide for the greatest things to give.</Text>
</Box>



</Box>
    )
}