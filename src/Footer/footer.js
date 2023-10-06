import { Box, Text } from "@chakra-ui/react"
import "./footer.css"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <Box  mt="20px" 
     
      pb="50px" >
<Box className="last-line"></Box>

<Box className="footer-main" p="40px 40px 0px 40px">
            {/* 1st box */}
            <Box>
                <Text color="#fa4a56" className="logo-meghkhush" >
                    MeghKhush
                </Text>
                <Text  w={["300px","400px"]} fontSize={["sm"]} textAlign={"start"}>
                Meghkhush Creation is a website offering an exquisite array of home decor items and thoughtful gift selections for all occasions, curated to bring joy and beauty to any space or celebration.
                </Text>
            </Box>
               {/* 2st box */}
<Box textAlign={"start"} lineHeight={"30px"} fontWeight={600} >
<Link>
    <Text>About Us</Text>
    <Text>Customer Service</Text>
    <Text>Shipping & Delivery</Text>
</Link>
</Box>

<Box textAlign={"start"} lineHeight={"30px"} fontWeight={600} >
<Link>
    <Text>Returns & Refunds</Text>
    <Text>Privacy Policy</Text>
    <Text>Terms of Service</Text>
</Link>
</Box>

<Box textAlign={"start"} lineHeight={"30px"} fontWeight={600} >
<Link>
    <Text>Product Categories</Text>
    <Text>Special Offers</Text>
    <Text>Payment Methods</Text>
</Link>
</Box>

                  {/* 3st box */}
<Box>
<Text>CONNECT WITH US</Text>
<Box className="contact-item">
{/* <Link to="#"><i class="fa-brands fa-facebook"></i></Link> */}
      <Link to="mailto:deepshikha2764@gmail.com"><i class="fas fa-envelope"></i></Link>
      <Link to="https://www.instagram.com/meghkhush_creation"><i class="fa-brands fa-instagram"></i></Link>
      <Link to="https://api.whatsapp.com/send?phone=9057589580"><i class="fa-brands fa-whatsapp"></i></Link>
      <Link to="https://www.youtube.com/channel/UCr27_4zmZICFSJnv5oayonQ"><i class="fa-brands fa-youtube"></i></Link>
</Box>
    
</Box>

                     {/* 4st box */}
        </Box>
        </Box>
     
    )
}
