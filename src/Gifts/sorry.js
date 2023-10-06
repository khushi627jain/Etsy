import { Box,Image,Text } from "@chakra-ui/react";
import "../Navbar/navbar.css"
import {PiInstagramLogoFill} from "react-icons/pi"


export default function Sorry(){


    return(
        <Box fontStyle={"revert-layer"} w="80%" m="auto" display={["grid","flex"]} alignItems={"center"} justifyContent={"center"} mt="8%"  >
        <Box m="auto" w="30%">
            <Image src="https://media.tenor.com/GCAp1T2fAZwAAAAi/sorry-im-sorry.gif" />
        </Box>
        <Box m="auto" fontStyle={"revert-layer"} w="70%">
            <Text fontWeight={"500"} 
            fontSize={["lg","lg","2xl","2xl","2xl"]} fontStyle={"revert-layer"}
            data-aos="fade-down" data-aos-duration="1000">OOPS!! You cannot buy the products right know from our website .
            </Text>
            <Text fontWeight={"500"} 
            fontSize={["lg","lg","2xl","2xl","2xl"]} fontStyle={"revert-layer"}
            data-aos="fade-down" data-aos-duration="1000">Please send the screenshot of the gift on instagram /whatsapp.
            </Text>
            <div id="contact">      
           <Text mt={"4%"} fontWeight={"1000"} 
            fontSize={["lg","lg","2xl","2xl","2xl"]}  fontFamily="sans-serif"
            data-aos="fade-down" data-aos-duration="1000" color="#fa4a65"
            >Feel free to connect with us</Text>
           <a href="https://www.animatedimages.org/cat-lines-562.htm">
           <Image className="line-style"
     
           w={["sm","md","xl","2xl","3xl"]}
           m="auto"
           h={["3px","5px"]}
           mt="10px"
           mb="10px"
           
             src="https://www.animatedimages.org/data/media/562/animated-line-image-0447.gif" border="0" alt="animated-line-image-0447" /></a>   
    <div className="nav-link contact">
    <div className="contact-form-inner">
    <a   href="mailto:deepshikha2764@gmail.com"><i class="fas fa-envelope"></i></a>
<Text data-aos="fade-right" data-aos-duration="1000" id="contact-email" textOverflow={"unset"} fontSize={["sm","md","xl","xl","xl"]}>deepshikha2764@gmail.com</Text>
    </div>
    <div className="contact-form-inner">
    <a   href="https://www.google.com/maps?q=Kota,+Rajasthan"> <i class="fas fa-map-marker-alt"></i></a>
<Text data-aos="fade-left" data-aos-duration="1000" id="contact-location"  fontSize={["sm","md","xl","xl","xl"]}>Kota,Rajasthan</Text>
    </div>
    <div className="contact-form-inner">
    <a   href="https://api.whatsapp.com/send?phone=9057589580"><i class="fas fa-phone"></i></a>
<Text data-aos="fade-right" data-aos-duration="1000" id="contact-phone" fontSize={["sm","md","xl","xl","xl"]}>9057589580</Text>
    </div>
   
    <div className="contact-form-inner">
    <a   href="https://www.instagram.com/meghkhush_creation"><PiInstagramLogoFill color="pink.500"/></a>
<Text data-aos="fade-right" data-aos-duration="1000" id="contact-phone" fontSize={["sm","md","xl","xl","xl"]}>Instagram</Text>
    </div>
   
   

    </div>
    <div id="last">
      <Text mt="20px" fontSize={["xl","xl","xl","xl","xl"]} textUnderlineOffset={"5px"} textDecorationStyle={"solid"} textDecoration={"underline"} textDecorationColor={"#fa4a6f"} >  Created by : Deepshikha jain</Text>
    </div>
        </div>
            
        </Box>



        </Box>
    )
}