import bright_light from "../assets_2/bright light white beach.png"; 
import paint_autumn from "../assets_2/paint autmun tree.png"; 
import swirl_colour from "../assets_2/swirl colour belnd paint bright.png"; 
import swirl_main from "../assets_2/MainImage.png";
import {motion} from 'framer-motion'; 

const Description =  "About\nThis is our NFT project, landscape stuff, jtou , nvjefinevuinve, nfewneiwonfwefnmnfsjk, njwndlanjskanskj, fnjewknfriunfrebnuivjkteirunfvjsknva, jeinveionuiq, jnfewnlNUIFIW QK CK ., ncjwkqnlkacniuan, jwnakniowanfnjkeneuiwna, JEFWNuinb;N."

export default function Home() {
    return (
        <div className="About">
            <h1 className="Main_Title">Welcome to Coastal Seasons A.I.</h1>
            <h2 className="about_title">About</h2>
                <p className="about_description">
                Welcome to Coastal Seasons A.I., our objective is simple; to bring real artistic innovation into the NFT community.<br/><br/>
                As a team, we have a unique dynamic; with multiple cultures coming together there is a shared enthusiasm for artistic expression and new, innovative, technology. With this, the team has worked with the collaborating artist to take their real work from the canvas to the digital screen, using A.I. to transform their work. 
                <br/><br/>
                Join us on this journey today, connect your wallet and navigate through our gallery to see some examples of collection #1. This is just the first step on this journey and we know with your support through the forthcoming projects we will make a real impact in this community. 
                <br/><br/>
                The Coatsal A.I. Team. 
 
                </p>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='BRIGHT_LIGHT'
                >
                    <img className="bright_light" src={bright_light} alt="" />
            </motion.div>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='PAINT_AUTUMN'
                >
                    <img className="paint_autumn" src={paint_autumn} alt="" />
            </motion.div>

            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='SWIRL_COLOUR'
                >
                    <img className="swirl_colour" src={swirl_colour} alt="" />
            </motion.div>


            <motion.div 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                className='SWIRL_CENTER'
                >
                    <img className="swirl_main" src={swirl_main} alt="" />
            </motion.div>
            

        </div>
    )
}