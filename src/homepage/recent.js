import { Box, Spacer,Text ,Image, Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import './style.css'
import {TiHeartOutline} from "react-icons/ti"
export default function Recent(){

let arr=[
    {
        image:"https://i.imgur.com/1K2Ny40.jpg",
        price:578,
        cutOff:1823
    },
    {
        image:"https://i.imgur.com/qT6cSXh.jpg",
        price:256,
        cutOff:854
    },
    {
        image:"https://i.imgur.com/b6QaPfY.jpg",
        price:2065,
        cutOff:3044
    },
    {
        image:"https://i.imgur.com/fo5ejPF.jpg",
        price:974,
        cutOff:3222
    },
    {
        image:"https://i.imgur.com/AZ9vWmP.jpg",
        price:777,
        cutOff:909
    },
    {
        image:"https://i.imgur.com/PSo4pGM.jpg",
        price:898,
        cutOff:2300
    },
    {
        image:"https://i.imgur.com/Pvaubuf.jpg",
        price:890,
        cutOff:2456
    },
    {
        image:"https://i.imgur.com/fZ0YoxU.jpg",
        price:555,
        cutOff:1000
    },
    {
        image:"https://i.imgur.com/msBG6mu.jpg",
        price:335,
        cutOff:678
    },
    {
        image:"https://i.imgur.com/szXar4p.jpg",
        price:578,
        cutOff:1283
    }
]

    return(
        <Box w="90%" m="auto" fontStyle={"revert-layer"} textAlign={"left"} >
            <Box  display={["grid","grid","flex","flex","flex"]} alignItems={"center"} justifyContent={"space-between"} mb="10px">
                <Text fontSize={"xl"} fontWeight={"500"}  >Best Seller</Text>
              
             <Text  color="gray.400" display={["grid","flex"]} textOverflow={"inherit"} >
                Show more from the &nbsp; <span><Link to="/gift/all"><Text  textDecoration={"underline"}>MeghKhush Creation </Text></Link></span>&nbsp;shop
                </Text>
                
            </Box>

            <Box m="auto"  
       columnGap={"10px"}
           justifyContent={"center"}
              display={"grid"} gridTemplateColumns={["repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)"]} 
            >

{
    arr.map((ele,idx)=>{
        return(
            <Box  className="recent" key={idx} >
            <Image className="recent"   
             borderRadius={"10px"} src={ele.image}/>
            <Tag bg="white" p={["0px","10px"]}  ml={["5px","10px"]} mt={["-28px","-45px"]} borderRadius={"30px"}>{`₹ ${ele.price}`}  &nbsp;<Text textDecoration={"line-through"} >{` ₹ ${ele.cutOff}`}</Text></Tag>
           <Tag  className="recent-heart" mt={["-83%","-80%"]} ml={["70%","80%"]} h={["30px","40px"]} w={["30px","40px"]} bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag>
            </Box>
        )
    })
}

           
          

            </Box>
        </Box>
    )
}