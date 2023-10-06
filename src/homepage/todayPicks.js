import { Box,Image,Text} from "@chakra-ui/react";
import {FaArrowRight} from "react-icons/fa"
import { Link } from "react-router-dom";

export default function TodayPicks(){

    let arr=[
        {
            image:"https://i.imgur.com/P3eqakz.jpg",
            title:"Unique Gifts",id:"image3",tags:"unique"
        },
        {
            image:"https://i.imgur.com/cJbqReY.jpg",
            title:"Royal Gifts",id:"image2",tags:"expensive and royal"
        },
       
        {
            image:"https://i.imgur.com/hrdzfPd.jpg",
            title:"Spiritual Gifts",
            id:"image1",tags:"spirituality"
        },
       
        {
            image:"https://i.imgur.com/9X1sb17.jpg",
            title:"Couple Gifts",id:"image5",tags:"couple"
        },
        {
            image:"https://i.imgur.com/MUWEwgo.jpg",
            title:"Budget Friendly Gifts",id:"image4",tags:"budget friendly"
        },

    ]

    const handleMouseEnter = (id) => {
        // When the image is hovered, apply the pop-out effect by scaling it up slightly.
        const image = document.getElementById(id);
        image.style.transform = 'scale(3)';
      };
    
      const handleMouseLeave = (id) => {
        // When the mouse leaves the image, reset the scale to its original size.
        const image = document.getElementById(id);
        image.style.transform = 'scale(1)';
      };


    return (
        <Box textDecoration={"none"} w="90%" m="auto" fontStyle={"revert-layer"} textAlign={"left"} mt="3%" mb="5%">
        <Box mb="20px" alignItems={"center"}>
        <Link to="/gift" style={{ textDecoration: 'none' }}>
        <Text display={"flex"} alignItems={"center"} textDecoration={"none"}
         fontSize={"3xl"} fontWeight={"500"} >Shop our top picks for you <span ><FaArrowRight  fontSize={"20px"} /></span>
         </Text>
         </Link>
        <Text  color="gray.500">Curated collections hand-picked by MeghKhush Creation</Text>
        </Box>
       
        <Box   display={"grid"}
         gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(5,1fr)"]} 
         m="auto" textAlign={"center"} justifyContent={"center"} alignItems={"center"}  gap={["10px","20px"]} >
        {
            arr.map((ele,idx)=>{
                return(
                    <Link to={`gift/category/${ele.tags}`} key={idx} style={{ textDecoration: 'none' }}>
                    <Box border={"1px solid #B3B6B7"}
                     _hover={{boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}}
                      borderRadius={"10px"} pb={["0px","15px"]}  >
                <Image
                id={ele.id} w={"100%"}
        onMouseEnter={()=>handleMouseEnter(ele.id)}
        onMouseLeave={()=>handleMouseLeave(ele.id)}
        style={{ transition: 'transform 0.2s ease',    transform: 'scale(1)' }}
                 borderTopLeftRadius={"10px"} borderTopRightRadius={"10px"} mb="10px" src={ele.image} alt=""/>
           <Text m={"10px"} textAlign={"left"} overflow={"hidden"}   fontSize={"medium"} fontWeight={"500"} >{ele.title}</Text>
            </Box>
                    </Link>
                )
            })
        }
      
          
</Box>
        
      


        </Box>
    )
}