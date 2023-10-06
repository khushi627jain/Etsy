import { Box ,Image,Tag,Text} from "@chakra-ui/react";

export default function Viewed(){
let arr=[
    {
price:1868,
image:"https://i.etsystatic.com/6375862/c/1992/1583/315/263/il/645080/5036340155/il_340x270.5036340155_fg93.jpg"
    },
    {
        price:4267,
        image:"https://i.etsystatic.com/35081319/r/il/b3f1d6/4111529666/il_340x270.4111529666_jvui.jpg"
    },
    {
        price:1365,
        image:"https://i.etsystatic.com/34690162/c/606/481/202/259/il/2bf8b5/3713930150/il_340x270.3713930150_7z5r.jpg"
    },
    {
        price:1221,
        image:"https://i.etsystatic.com/40781050/r/il/6ad47b/4699564123/il_340x270.4699564123_nsp9.jpg"
    },
    {
        price:6827,
        image:"https://i.etsystatic.com/39458228/c/1851/1471/47/941/il/219712/4492727552/il_340x270.4492727552_thc3.jpg"
    },
    {
        price:1221,
        image:"https://i.etsystatic.com/6375862/c/1992/1583/315/263/il/645080/5036340155/il_340x270.5036340155_fg93.jpg"
    }
]

    return(
        <Box>
        <Text m={"auto"} w="90%" mb="10px" mt="2%" fontSize={"xl"} fontWeight={"500"} align={"left"} >Because you viewed</Text>
        <Box alignItems={"center"} w="90%" m="auto" fontStyle={"revert-layer"} textAlign={"left"} display={["grid","grid","flex"]} gap="10px">
            <Box>
<Image h="100%" src="https://i.etsystatic.com/16658962/r/il/ff752f/4427816942/il_680x540.4427816942_tr53.jpg"/>
<Tag bg="white" p="10px" ml="10px" mt="-45px" borderRadius={"30px"}>₹ 999 </Tag>
            </Box>
            <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} >
{
    arr.map((ele,idx)=>{
        return(
            <Box key={idx}>
            <Image src={ele.image}/>
<Tag bg="white" p="10px" ml="10px" mt="-45px" borderRadius={"30px"}>{`₹ ${ele.price}`}</Tag>
</Box>

        )
    })
}
            </Box>
        </Box>
        </Box>
    )
}