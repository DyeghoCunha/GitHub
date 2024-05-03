import styles from './styles.module.scss';
import Picture1 from '/public/images/1.jpeg';
import Picture1a from '/public/images/1a.jpeg';
import Picture2a from '/public/images/2a.jpeg';
import Picture3a from '/public/images/3a.jpeg';
import Picture4a from '/public/images/4a.jpeg';
import Picture5a from '/public/images/5a.jpeg';
import Picture6a from '/public/images/6a.jpeg';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Box, Card } from '@chakra-ui/react';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale1a = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale2a = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale3a = useTransform(scrollYProgress, [0, 1], [1, 7]);
    const scale4a = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale5a = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const scale6a = useTransform(scrollYProgress, [0, 1], [1, 10]);
    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture6a,
            scale: scale1a
        },
        {
            src: Picture5a,
            scale: scale2a
        },
        {
            src: Picture4a,
            scale: scale3a
        },
        {
            src: Picture3a,
            scale: scale4a
        },
        {
            src: Picture1a,
            scale: scale5a
        },
        {
            src: Picture2a,
            scale: scale6a
        },



    ]

    return (
        <div ref={container} className={styles.container}>

            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                               
                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        placeholder='blur'
                                    />
                              
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
