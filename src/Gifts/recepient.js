
import { Box, Grid, GridItem ,Image,Text} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Recepient(){

const navigate=useNavigate();
const dispatch=useDispatch()

function showFilterThings(occasion,tag,type){

let url="https://meghkhush-creation-e6ai.onrender.com/gift";

axios.get(url,{
    params:{
        occasion,"tags":tag
    }
})
.then(res=>{
    dispatch({type:"changeFilteredData",payload:res.data.data})
    navigate(`/gift/category/${occasion}`)
})
.catch(err=>console.log(err))



}


    let arr=[
        {
            title:"Gifts for Valentine's Day",
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1666228661-screen-shot-2022-10-19-at-9-15-46-pm-1666228637.png?crop=0.8607484769364665xw:1xh;center,top&resize=980:*",
            tag:["couple", "husband",
            "wife",
            "girlfriend",
            "boyfriend",
            "him",
            "her",],
            occasion:"marriage",
            type:"couple"
        },
        {
            title:"Gifts for Anniversary",
            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1666190487-il_794xN.4100239010_cimy.jpg?crop=0.838xw:1xh;center,top&resize=980:*",
       occasion:"anniversary",
       tag:["couple"],type:"anniversary"
        },
        {
            title:"Spritiual Gift",
            image:"https://i.etsystatic.com/32166078/r/il/142574/4787867305/il_680x540.4787867305_rfi1.jpg",
       tag:"friend",
       occasion:"spiritual",type:"friends"
       
        },
        {
            title:"Gifts on House-Warming",
            image:"https://i.etsystatic.com/41228060/r/il/b77b8d/4799659060/il_680x540.4799659060_qhre.jpg",
        tag:["family"],type:"family",occasion:"houseWarming"
        },
        {
            title:"Gifts for Birthday",
            image:"https://m.media-amazon.com/images/I/71JW2BNmZ4L._AC_UL600_FMwebp_QL65_.jpg",
       occasion:"birthday",type:"birthday"
       
        },
        {
            title:"Gifts for House",
            image:"https://i.etsystatic.com/21859925/r/il/1ee530/2623242698/il_340x270.2623242698_f0jd.jpg",
       occasion:"inauguration",
       tag:["inauguration",
       "houseWarming","decor","office"],type:"house"
        }
    ]
    return(
        <Box w="90%" m="3% auto" fontStyle={"revert-layer"}>
        <Text fontWeight={"500"} fontSize={"4xl"}>Gifts by Occasion</Text>
         <Grid mt="2%" justifyContent={"center"} alignItems={"center"} templateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} rowGap={"30px"} columnGap={["5px","20px","50px"]} >
        {
            arr.map((ele,idx)=>{
                return(
                    <GridItem onClick={()=>{showFilterThings(ele.occasion,ele.tag,ele.type)}} key={idx} borderRadius={"10px"}  gap="30px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}>
                            <Image w={["100%"]} h={["170px","180px","250px","350px"]} borderRadius={"10px 0px 0px 10px"}  src={ele.image} />
                        <Text w="90%"
                        whiteSpace={"nowrap"}
                        overflow={"hidden"}
                        textOverflow={"ellipsis"}
                         mt="10px" mb="10px" ml="10px" textAlign={"left"} fontWeight={"500"} fontSize={["","","xl","2xl"]}>{ele.title}</Text>
                    </GridItem>
                )
            })
        }
    </Grid>

        </Box>
    )
}