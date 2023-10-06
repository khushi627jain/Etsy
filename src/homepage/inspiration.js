import {Grid,GridItem,Text,Image,Tag,Box} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import {TiHeartOutline} from "react-icons/ti"
import './style.css'

export default function Inspiration(){
    return(
        <Grid w="90%" m="auto" mt="7%" alignItems={"center"} justifyContent={"center"}
         fontStyle={"revert-layer"} textAlign={"left"} 
         templateColumns={["repeat(4,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(8,1fr)"]}
          columnGap={"10px"}>
    
        <GridItem colSpan={2} alignItems={"center"}>
<Text color={"gray.400"}>Our Customer Picks
</Text>
<Text fontSize={["2xl","2xl","3xl"]} fontWeight={500}>
Everyday inspiration
</Text>
<Link to="gift/all"><Text display={"flex"} alignItems={"center"} mt="3%">Shop these unique fields <span ml="12px"><FaArrowRight ml="12px"/></span></Text></Link>
        </GridItem>

        <GridItem className="recent" colSpan={2} >
        <Image  borderRadius={"5px"} src="https://i.imgur.com/GhDCY0B.jpg"/>
            <Tag className="recent-heart" bg="white" p="10px" ml="4px" mt="-40px" borderRadius={"30px"}>₹ 2901  </Tag>
           {/* <Tag className="recent-heart" bg={"white"} mt="-85%" ml="85%" h="40px" w="40px" bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag> */}
        </GridItem>

        
        <GridItem className="recent" colSpan={2}  >
        <Image borderRadius={"5px"} src="https://i.imgur.com/AusKJEw.jpg"/>
            <Tag className="recent-heart" bg="white" p="10px" ml="4px" mt="-40px" borderRadius={"30px"}>₹ 3286  </Tag>
           {/* <Tag className="recent-heart" bg={"white"} mt="-85%" ml="85%" h="40px" w="40px" bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag> */}
        </GridItem>

        <GridItem className="recent" colSpan={2}>
        <Image  borderRadius={"5px"} src="https://i.imgur.com/hBHwt7O.jpg"/>
            <Tag className="recent-heart" bg="white" p="10px" ml="4px" mt="-40px" borderRadius={"30px"}>₹ 425  </Tag>
           {/* <Tag className="recent-heart" bg={"white"} mt="-85%" ml="85%" h="40px" w="40px" bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag> */}
        </GridItem>

        <GridItem className="recent" colSpan={2}>
        <Image  borderRadius={"5px"} src="https://i.imgur.com/VbwSROY.jpg"/>
            <Tag className="recent-heart" bg="white" p="10px" ml="4px" mt="-40px" borderRadius={"30px"}>₹ 425  </Tag>
           {/* <Tag className="recent-heart" bg={"white"} mt="-85%" ml="85%" h="40px" w="40px" bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag> */}
        </GridItem>

        <GridItem className="recent" colSpan={2}>
        <Image  borderRadius={"5px"} src="https://i.imgur.com/UApGdI0.jpg"/>
            <Tag className="recent-heart" bg="white" p="10px" ml="4px" mt="-40px" borderRadius={"30px"}>₹ 425  </Tag>
           {/* <Tag className="recent-heart" bg={"white"} mt="-85%" ml="85%" h="40px" w="40px" bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag> */}
        </GridItem>

        <GridItem className="recent" colSpan={2}>
        <Image  borderRadius={"5px"} src="https://i.imgur.com/H0qYui3.jpg"/>
            <Tag className="recent-heart" bg="white" p="10px" ml="4px" mt="-40px" borderRadius={"30px"}>₹ 425  </Tag>
           {/* <Tag className="recent-heart" bg={"white"} mt="-85%" ml="85%" h="40px" w="40px" bgColor={"white"} borderRadius={"50%"}><TiHeartOutline color="black" fontSize={"30px"}/></Tag> */}
        </GridItem>

        <GridItem colSpan={2} alignItems={"center"} justifyContent={"center"} >
        <Box  alignItems={"center"}>
        <Text >
Add to Favourites
Creative items to keep you smiling day in and day out.
</Text></Box>


        </GridItem>

        

        </Grid>
    )
}