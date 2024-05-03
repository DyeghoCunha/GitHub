import styles from './styles.module.scss';
import Picture1 from './images/1.jpeg';
import Picture1a from './images/1a.jpeg';
import Picture2a from './images/2a.jpeg';
import Picture3a from './images/3a.jpeg';
import Picture4a from './images/4a.jpeg';
import Picture5a from './images/5a.jpeg';
import Picture6a from './images/6a.jpeg';
import Picture3 from '/public/images/3.jpg';
import Picture4 from '/public/images/4.jpg'
import Picture5 from '/public/images/5.jpg'
import Picture6 from '/public/images/6.jpg'
import Picture7 from '/public/images/7.jpeg'
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';
import { Box } from '@chakra-ui/react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale1a = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale2a = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale3a = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale4a = useTransform(scrollYProgress, [0, 1], [1, 7]);
    const scale5a = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale6a = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 16]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 18]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 19]);
    const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);
    const scale11 = useTransform(scrollYProgress, [0, 1], [1, 11]);

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
            src: Picture2a,
            scale: scale5a
        },
           {
            src: Picture1a,
            scale: scale6a
        },
      
      
        
    ]

    return (
        <div   ref={container} className={styles.container}>
           
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
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
