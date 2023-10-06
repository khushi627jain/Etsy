import { Box, Grid, GridItem ,Image,Text,extendTheme} from "@chakra-ui/react";

import {FaArrowRight} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import axios from "axios";


export default function Category(){

let arr=[
    {
        title:"Gifts for Him",
        image:"https://i.pinimg.com/564x/51/33/07/513307fb75d853d11f5041837b54df0c.jpg",
        type:"him"
    },
    {
        title:"Gifts for Her",
        image:"https://i.pinimg.com/564x/64/d6/6b/64d66bc75ad3fd148bc6dcc3c0e6bb40.jpg",
        type:"her"
    },
    {
        title:"Wedding gifts",
        image:"https://theperfectgift.ae/cdn/shop/products/macaron-rose-tower-uae.jpg?v=1614350707",
        type:"wedding"
    },
    {
        title:"Foy your Home",
        image:"https://i.imgur.com/0zj4GqR.jpg",
        type:"decor"
    }
]

 
  
const navigate=useNavigate();
const dispatch=useDispatch();


function filterAccordingToType(type){
 axios.get(`https://meghkhush-creation-e6ai.onrender.com/gift`,{
    params:{
        tags:[type]
    } 
})
.then(res=>{
dispatch({type:"changeFilteredData",payload:res.data.data})
navigate(`/gift/category/${type}`)

})
.catch(err=>console.log(err))
}

return(
    <Box  fontStyle={"revert-layer"} w={["90%","70%","90%"]} m="auto" mt={["25%","13%","10%"]} mb="5%">
    
    <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}

    rowGap={"30px"} columnGap={["40px","10px","50px"]} >
        {
            arr.map((ele,idx)=>{
                return(
                    <GridItem 
                    onClick={()=>{filterAccordingToType(ele.type)}} 
                     key={idx} borderRadius={"10px"}
                      display={"flex"} justifyContent={"start"} alignItems={"center"} rowGap="30px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}>
               
                        <Box >
                            <Image borderRadius={"10px 0px 0px 10px"}
                              w={["300px","280px","300px"]} h={["180px","300px","210px","250px","250px"]} 

                           src={ele.image} />
                        </Box>
                        <Box  display={"grid"} pr={"5px"} justifyContent={"center"} alignItems={"center"} >
                        <Box>
                         <Text fontWeight={"500"} fontSize={["md","xl","2xl"]}>{ele.title}</Text>
                         </Box>
                        <Box>          
                         <Text display={"flex"} fontWeight={"400"} alignItems={"center"}>Shop this category page <span style={{marginLeft:"2%",marginRight:"2%"}}><FaArrowRight/></span></Text>
                         </Box>
                        </Box>
                    </GridItem>
                )
            })
        }
    </Grid>
    </Box>
)
}