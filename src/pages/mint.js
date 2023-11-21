import { useState } from 'react'; 
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'; 
import image1 from "../assets_4/mint1.png";
import image2 from "../assets_4/mint2.png";
import image3 from "../assets_4/mint3.png";
import image4 from "../assets_4/mint4.png";
import image5 from "../assets_4/mint5.png";
import { BigNumber} from "@ethersproject/bignumber";
const contractABI = require("/Users/macbook/nft-ls-app/src/pages/CoastalSeasons.json")
const ethers = require("ethers");

// import  Landscape from  'NFT-ERC_721A.json'; EXTRACT API SO CAN USE CONTRACT

const LandscapeAddress = "0x1423eDf21315B244369596E150293C7F5E951653"; 

const Mint = ({}) => {
    const [mintAmount, setmintAmount] = useState(1); 
// METAMASK LOGIN/CONNECT
    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum); 
            const signer = await provider.getSigner(); 
            const contract = new ethers.Contract(
                LandscapeAddress, 
                contractABI,
                signer
            ); 
            try {
                const response = await contract.publicMint(BigNumber.from(mintAmount).toString(), {
                    value: ethers.parseEther((0.012 * mintAmount).toString()),
                }); 
                console.log('response: ', response);                
            } catch (err) {
                console.log("error", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setmintAmount(mintAmount - 1); 
    }; 

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setmintAmount(mintAmount + 1);
    };

    return (
        <Flex className='Mint_Page' justify={"center"} align={"center"} height={"100vh"} paddingBottom={"150px"}>
            <img className='Mint1' src={image1} alt='' />
            <img className='Mint2' src={image2} alt='' />
            <img className='Mint3' src={image3} alt='' />
            <img className='Mint4' src={image4} alt='' />
            <img className='Mint5' src={image5} alt='' />
            <Box className='Mint_Main_Section'>
                <div>
                    <Text fontSize={"45px"} color={'black'} width={'400px'}>Coastal Seasons A.I</Text>
                    <Text 
                        fontSize={"13px"}
                        color={"black"}
                        letterSpacing={"-5.5%"}
                        fontFamily={"VT323"}
                    > 
                        Collection #1: 333 <br/>
                        Public Mint Price: 0.012ETH <br/>
                        MAX 3 Mints per Wallet <br/>
                        CONNECT WALLET TO MINT

                    </Text>
                </div>
                    <div>
                        <Flex align={"center"} justify={"center"}>
                            <Button
                                marginRight={"8px"}
                                backgroundColor={"white"}
                                borderRadius={"5px"}
                                color={"black"}
                                cursor={"pointer"}
                                fontFamily={"inherit"}
                                padding={"7px"}
                                marginTop={"10px"}
                                onClick={handleDecrement}
                            >
                                -
                            </Button>
                            <Input 
                                readOnly
                                fontFamily={"inherit"}
                                width={"100px"}
                                height={"40px"}
                                textAlign={"center"}
                                paddingLeft={"19px"}
                                marginTop={"10px"}
                                type='number' 
                                value={mintAmount} 
                            />
                            <Button
                                marginLeft={"8px"}
                                backgroundColor={"white"}
                                borderRadius={"5px"}
                                color={"black"}
                                cursor={"pointer"}
                                fontFamily={"inherit"}
                                padding={"7px"}
                                marginTop={"10px"}
                                onClick={handleIncrement}
                                >
                                    +
                                </Button>
                        </Flex>
                        <Button
                            backgroundColor={"white"}
                            borderRadius={"5px"}
                            color={"black"}
                            cursor={"pointer"}
                            fontFamily={"inherit"}
                            padding={"15px"}
                            marginTop={"10px"} 
                            onClick={handleMint}
                        >
                            MINT NOW 
                        </Button>
                    </div>         
            </Box>
        </Flex>
    );
};

export default Mint;
