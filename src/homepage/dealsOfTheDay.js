import { Box, Text, Image, Spacer } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"



export default function Deals() {

const navigate=useNavigate()
  const handleMouseEnter = (id) => {
    const image = document.getElementById(id);
    image.style.transform = 'scale(1.3)';
  };

  const handleMouseLeave = (id) => {
    // When the mouse leaves the image, reset the scale to its original size.
    const image = document.getElementById(id);
    image.style.transform = 'scale(1)';
  };
  return (<>

    <Box w="90%" m="auto" fontStyle={"revert-layer"} textAlign={"left"} mt="5%" mb="5%">
      <Box display={["grid", "grid", "flex", "flex", "flex"]}
        alignItems={"center"} justifyContent={"space-between"}>
        <Text  fontSize={"3xl"} fontWeight={"500"} >Deals of the day</Text>

        <Link to="/gift/all"><Text fontWeight={"500"} >{`Shop all Deals ->`}</Text></Link>

      </Box>

      <Box

        display={"grid"} 
        gridTemplateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)"]}
        m="auto" justifyContent={"center"} gap="20px" mt="1%" >

        <Box 
        cursor={"pointer"} onClick={()=>{navigate("gift/category/mantra farme")}}
          pb={["15px", "0px", "0px", "0px", "10px"]}
          borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
          <Image id="image1"
            onMouseEnter={() => handleMouseEnter("image1")}
            onMouseLeave={() => handleMouseLeave("image1")}
            style={{ transition: 'transform 0.2s ease' }}
            h={"80%"} w={"100%"}
            alignItems={"center"} m="auto" justifyContent={"center"} mb={["3px", "10px"]} borderRadius={"10px 10px 0px 0px"} src="https://i.imgur.com/q2wtcTs.jpg" alt="" />
          <Text fontSize={["smaller", "md"]} pl="13px" color="gray.500">Up to 40% Off on</Text>
          <Text w={["100%", "80%"]} fontSize={["smaller", "md"]} fontWeight={"500"} pl="13px">Namokar Mantra Frame</Text>
        </Box>

        <Box
         cursor={"pointer"} onClick={()=>{navigate("gift/category/nameplate")}}

          pb={["15px", "0px", "0px", "0px", "10px"]}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <Image

            h={"80%"} w={"100%"}
            alignItems="center"
            m="auto"
            justifyContent="center"
            mb={["3px", "10px"]}
            borderRadius="10px 10px 0px 0px"
            src="https://i.imgur.com/TNMmvm0.jpg"
            alt=""
            id="image6"
            onMouseEnter={() => handleMouseEnter("image6")}
            onMouseLeave={() => handleMouseLeave("image6")}
            style={{ transition: 'transform 0.2s ease' }} // Apply smooth transition on transform property
          />
          <Text pl="13px" fontSize={["smaller", "md"]} color="gray.500">
            Up to 20% Off on
          </Text>
          <Text w={["100%", "80%"]} fontSize={["smaller", "md"]} fontWeight="500" pl="13px">
            Name Plates
          </Text>
        </Box>

        <Box
cursor={"pointer"} onClick={()=>{navigate("gift/category/bouquet")}}
          pb={["15px", "0px", "0px", "0px", "10px"]}
          borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
          <Image id="image2"
            onMouseEnter={() => handleMouseEnter("image2")}
            onMouseLeave={() => handleMouseLeave("image2")}
            style={{ transition: 'transform 0.2s ease' }}

            h={"80%"} w={"100%"}
            alignItems={"center"} m="auto" justifyContent={"center"} mb={["3px", "10px"]} borderRadius={"10px 10px 0px 0px"} src="https://i.imgur.com/5PH04c0.jpg" alt="" />
          <Text pl="13px" fontSize={["smaller", "md"]} color="gray.500">Up to 20% Off on</Text>
          <Text w={["100%", "80%"]} fontSize={["smaller", "md"]} fontWeight={"500"} pl="13px">Chocolate & Flowers Bouquet</Text>
        </Box>

        <Box
cursor={"pointer"} onClick={()=>{navigate("gift/category/random")}}
          pb={["15px", "0px", "0px", "0px", "10px"]}
          borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
          <Image id="image3"
            onMouseEnter={() => handleMouseEnter("image3")}
            onMouseLeave={() => handleMouseLeave("image3")}
            style={{ transition: 'transform 0.2s ease' }}

            h={"80%"} w={"100%"}
            alignItems={"center"} m="auto" justifyContent={"center"} mb={["3px", "10px"]} borderRadius={"10px 10px 0px 0px"} src="https://i.imgur.com/tMw6obh.jpg" alt="" />
          <Text pl="13px" fontSize={["smaller", "md"]} color="gray.500">Up to 30% Off on</Text>
          <Text w={["100%", "80%"]} fontSize={["smaller", "md"]} fontWeight={"500"} pl="13px">Personalized Gifts</Text>
        </Box>

        <Box
cursor={"pointer"} onClick={()=>{navigate("gift/category/resin gifts")}}
          pb={["15px", "0px", "0px", "0px", "10px"]}

          borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
          <Image id="image4"
            onMouseEnter={() => handleMouseEnter("image4")}
            onMouseLeave={() => handleMouseLeave("image4")}
            style={{ transition: 'transform 0.2s ease' }}

            h={"80%"} w={"100%"}
            alignItems={"center"} m="auto" justifyContent={"center"} mb={["3px", "10px"]}
            borderRadius={"10px 10px 0px 0px"} src="https://i.imgur.com/gJgbWXR.jpg" alt="" />
          <Text pl="13px" fontSize={["smaller", "md"]} color="gray.500">Up to 20% Off on</Text>
          <Text w={["100%", "80%"]} fontSize={["smaller", "md"]} fontWeight={"500"} pl="13px">Resin Gifts</Text>
        </Box>

        <Box
cursor={"pointer"} onClick={()=>{navigate("gift/category/explosion")}}
          pb={["15px", "0px", "0px", "0px", "10px"]}
          borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
          <Image id="image5"
            onMouseEnter={() => handleMouseEnter("image5")}
            onMouseLeave={() => handleMouseLeave("image5")}
            style={{ transition: 'transform 0.2s ease' }}
            h={"80%"} w={"100%"}
            alignItems={"center"} m="auto" justifyContent={"center"} mb={["3px", "10px"]} borderRadius={"10px 10px 0px 0px"}
            src="https://i.imgur.com/7EQYHLQ.jpg" alt="" />
          <Text pl="13px" fontSize={["smaller", "md"]} color="gray.500">Up to 10% Off on</Text>
          <Text w={["100%", "80%"]} fontSize={["smaller", "md"]} fontWeight={"500"} pl="13px">Explosion Box</Text>
        </Box>
      </Box>




    </Box>
  </>)
}