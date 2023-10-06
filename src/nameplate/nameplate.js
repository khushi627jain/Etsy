import { Button ,Text} from "@chakra-ui/react"
 import './namplate.css'
export default function NamePlate(){



    return(
        <div className="main-div">
         <div className="img1">
         <div className="img1-Button">
         <Button w={"20%"} m={"auto"} bg={"#43464f"} p={"30px 60px"} ButtonTransform={"uppercase"} ButtonAlign={"center"} 
         fontSize={"2xl"}>Mantra Frame</Button>
         </div>  
         </div>

         <div>
            <Text color={"#fa4a56"}  m={"auto"} bg={"#43464f"} p={"20px 60px"}  ButtonAlign={"center"} fontSize={"2xl"}>
            "Elevate Your Spiritual Space with Resin Radiance: Illuminate Your Life with Lustrous Matra Frame and Abundant Blessings!"
            </Text>
         </div>

         <div className="img2">
         <div className="img2-Button">
         <Button w={"20%"} m={"auto"} color={"#fa4a56"}  bg={"#43464f"} p={"30px 60px"}   fontSize={"2xl"}>
           GEODE ART
            </Button>
            </div>
         </div>

         <div>
            <Text color={"#fa4a56"}  m={"auto"} bg={"#43464f"} p={"20px 60px"}  ButtonAlign={"center"} fontSize={"2xl"}>
            "Radiate Elegance with Lustrous Geode Art: Transform Your Home into a Shimmering Oasis!"
            </Text>
         </div>

         <div className="img3">
         <div className="img3-Button">
         <Button w={"15%"} m={"auto"} color={"#fa4a56"} p={"25px 0px"}  bg={"#43464f"}    fontSize={"2xl"}>
           NAME PLATE
            </Button>
            </div>
         </div>

         <div>
            <Text color={"#fa4a56"}  m={"auto"} bg={"#43464f"} p={"20px 60px"}  ButtonAlign={"center"} fontSize={"2xl"}>
            "Elevate Your Home's Entrance with Timeless Elegance: Our Resin Nameplate - Lasting Beauty That Shines On!"
            </Text>
         </div>
        





        </div>
    )
}