import { Box, Grid, Text } from "@chakra-ui/react";
import './style.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




export default function Discover() {

  
    const navigate=useNavigate();
    return (
        <Box fontStyle={"revert-layer"}>
            <Box bg="pink.100" h="200px" w="100%">

            </Box>
            <Box mt="-165px" >
                <Text fontSize={"3xl"} mb="20px" fontStyle={"revert-layer"}>Discover one-of-a-kind items from our shop</Text>
                <Grid 
                    templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(6, 1fr)", "repeat(6, 1fr)"]}
                     justifyContent="center"
                     alignItems={"center"}
                    gap={"10px"}
justifyItems={"start"}
                    w={["90%", "85%", "70%"]} m="auto"
                >

                    <Box cursor={"pointer"} onClick={()=>{navigate("gift/category/nameplate")}} className="discover-card" display={"grid"} fontWeight={"500"}>
                        <img className="discover-card-img" src="https://i.pinimg.com/564x/23/fc/fc/23fcfc8c52b5b81b6a67ee56b293b8e6.jpg" />
                        <Text  fontSize={["sm","sm","sm","sm","md"]}>Name Plate </Text>
                        <Text fontSize={["sm","sm","sm","sm","md"]}>From ₹1500</Text>
                        <Box className="discover-card-line" bg="black" w="130px" height={"1.5px"} mt="10px"></Box>
                    </Box>

                    <Box cursor={"pointer"} className="discover-card" onClick={()=>{navigate("gift/category/explosion")}} display={"grid"} fontWeight={"500"}>
                        <img className="discover-card-img" src="https://i.pinimg.com/564x/74/8b/33/748b339e7f7ddca2c050a55d638f47b2.jpg" />
                        <Text fontSize={["sm","sm","sm","sm","md"]}>Explosion Box</Text>
                        <Text fontSize={["sm","sm","sm","sm","md"]}>From ₹1000</Text>
                        <Box className="discover-card-line" bg="black" w="130px" height={"1.5px"} mt="10px"></Box>
                    </Box>

                    <Box cursor={"pointer"} onClick={()=>{navigate("gift/category/wooden box")}} className="discover-card" display={"grid"} fontWeight={"500"}>
                        <img className="discover-card-img" src="https://i.pinimg.com/564x/07/47/8d/07478d4a140fd9f4869afb308bb4f48a.jpg" />
                        <Text fontSize={["sm","sm","sm","sm","md"]}>Wooden Box Gift</Text>
                        <Text fontSize={["sm","sm","sm","sm","md"]}>From ₹600</Text>
                        <Box className="discover-card-line" bg="black" w="130px" height={"1.5px"} mt="10px"></Box>
                    </Box>

                    <Box cursor={"pointer"} onClick={()=>{navigate("gift/category/resin gifts")}} className="discover-card" display={"grid"} fontWeight={"500"}>
                        <img className="discover-card-img" src="https://i.pinimg.com/564x/ed/5b/10/ed5b10390b09b9e17c097e4af5075b8f.jpg" />
                        <Text fontSize={["sm","sm","sm","sm","md"]}>Resin Gifts</Text>
                        <Text fontSize={["sm","sm","sm","sm","md"]}>From ₹600</Text>
                        <Box className="discover-card-line" bg="black" w="130px" height={"1.5px"} mt="10px"></Box>
                    </Box>

                    <Box cursor={"pointer"} onClick={()=>{navigate("gift/category/mantra frame")}} className="discover-card" display={"grid"} fontWeight={"500"}>
                        <img className="discover-card-img" src="https://i.pinimg.com/564x/1f/09/fc/1f09fcfde7701e0d220d22540887e368.jpg" />
                        <Text  fontSize={["sm","sm","sm","sm","md"]}>Mantra Frame</Text>
                        <Text fontSize={["sm","sm","sm","sm","md"]}>From ₹1500</Text>
                        <Box className="discover-card-line" bg="black" w="130px" height={"1.5px"} mt="10px"></Box>
                    </Box>
 
                    <Box cursor={"pointer"} onClick={()=>{navigate("gift/category/bouquet")}} className="discover-card" display={"grid"} fontWeight={"500"}>
                        <img className="discover-card-img" src="https://i.pinimg.com/564x/0b/dc/43/0bdc43091a3edc5f2cbd891a69b6e4fc.jpg" />
                        <Text fontSize={["sm","sm","sm","sm","md"]}>Chocolate Bouquet</Text>
                        <Text fontSize={["sm","sm","sm","sm","md"]}>From ₹1500</Text>
                        <Box className="discover-card-line" bg="black" w="130px" height={"1.5px"} mt="10px"></Box>
                    </Box>

                </Grid>
            </Box>
        </Box>
    )
}