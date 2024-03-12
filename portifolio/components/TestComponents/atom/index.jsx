import { Box, Center, keyframes, useBoolean, Image,Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import zapLogo from "@/public/whatsapp.png"

const animate = keyframes`
	0% {
		filter: hue-rotate(0deg);
	}

	100% {
		filter: hue-rotate(360deg);
	}
`;

export default function Cube3dSolo() {
	const [hover, setHover] = useState(false);
	const [top,setTop] = useState(false)
	const [front,setFront] = useState(false)
	const [left,setLeft] = useState(false)
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		if (hover) {
			const timer = setTimeout(() => {
				setShowButton(true);
			}, 500); // Atrasa a aparição dos botões em 1 segundo
			return () => clearTimeout(timer);
		} else {
			setShowButton(false);
		}
	}, [hover]);

	return (
		<Center mt="300px" w="100px" h="100px" onMouseLeave={() => {setHover(false), setLeft(false),setFront(false), setTop(false)}}>
			<Center
				position="relative"
				bottom="-10px"
				right="-20px"
				transform="skewY(-25deg)"
				animation={hover ? `${animate} 5s linear infinite` : undefined}
				onMouseEnter={() => setHover(true)}
				
			>
				<Box position="relative" zIndex="2">
					<Box position="relative">
						<Box
							
							position="relative"
							display="inline-block"
							w={hover? "50px":"0px"}
							bottom={front?-10:0}
							right={front?-10:0}
							h="50px"
							justifyContent="center"
							alignItems="center"
							textAlign="center"
							bgGradient={hover ? "linear(to-tl, #ef4149, #9c6a6a)" : "linear(to-tl, #FFFFFF, #000000)"}
							transition="1s"
							color="#ef4149"
							filter={hover ? "drop-shadow(20px 20px 30px purple)" : undefined}
							border="5px solid #ffffff"
							zIndex={2}
						>
							<Center w="100%" h="100%">{showButton?<Button onClick={()=> setFront(!front)} ></Button>:<Box transition="1s"></Box>}</Center>
						</Box>
						
						<Box
							position="absolute"
							left={left?"-80px":"-40px"}
							top="0px"
							w="40px"
							h="100%"
							 bgGradient={hover ? "linear(to-tr, #ef4149, #9c6a6a)" : "linear(to-tr, #FFFFFF, #000000)"}
							transformOrigin="right"
							transform="skewY(45deg)"
							transition="1s"
							color="#ef4149"
							filter={hover ? "drop-shadow(-20px 20px 30px purple)" : undefined}
							border="5px solid #d3d3d3"
							zIndex={2}
						>
							<Center w="100%" h="100%">{showButton?<Button onClick={()=> setLeft(!left)} ></Button>:<Box transition="1s"></Box>}</Center>
						</Box>
						<Box
							position="absolute"
							left="10px"
							top="0px"
							w="40px"
							h="100%"
							 bgGradient={hover ? "linear(to-tr, #ef4149, #9c6a6a)" : "linear(to-tr, #FFFFFF, #000000)"}
							transformOrigin="right"
							transform="skewY(45deg)"
							transition="1s"
							color="#ef4149"
							filter={hover ? "drop-shadow(-20px 20px 30px purple)" : undefined}
							border="5px solid #d3d3d3"
						>
							<Center w="100%" h="100%">{showButton?<Button onClick={()=> setLeft(!left)} >RB</Button>:<Box transition="1s"></Box>}</Center>
						</Box>
						<Box
							position="absolute"
							top={top?"-80px":"-40px"}
							left="0px"
							w="100%"
							h="40px"
							 bgGradient={hover ? "linear(to-bl, #ef4149, #9c6a6a)" : "linear(to-bl, #FFFFFF, #000000)"}
							transformOrigin="bottom"
							transform="skewX(45deg)"
							transition="1.0s"
							filter={hover ? "drop-shadow(20px -20px 30px #ef4149)" : undefined}
							border="5px solid #f2f2f2"
							zIndex={2}
						>
							<Center w="100%" h="100%">{showButton?<Button onClick={()=> setTop(!top)} ></Button>:<Box transition="1s"></Box>}</Center>
						</Box>
						<Box
							position="absolute"
							top="10px"
							left="0px"
							w="100%"
							h="40px"
							 bgGradient={hover ? "linear(to-bl, #ef4149, #9c6a6a)" : "linear(to-bl, #FFFFFF, #000000)"}
							transformOrigin="bottom"
							transform="skewX(45deg)"
							transition="1.0s"
							filter={hover ? "drop-shadow(20px -20px 30px #ef4149)" : undefined}
							border="5px solid #f2f2f2"
						>
							<Center w="100%" h="100%">{showButton?<Button onClick={()=> setTop(!top)} >bot</Button>:<Box transition="1s"></Box>}</Center>
						</Box>
					</Box>
				</Box>
			</Center>
		</Center>
	)
}
