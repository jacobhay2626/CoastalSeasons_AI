import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './gallery_images';



export default function Gallery() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);


    return (
        <div className='Gallery'>
            <h1 className='Gallery_header'> Gallery</h1>
            <h2 className='Collection1'> Collection #1 - Preview (333)</h2>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'
                >
                    {images.map(image => {
                        return (
                            <motion.div className='item' key={image}>
                                <img src={image} alt='' />

                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

        </div>
    )
}