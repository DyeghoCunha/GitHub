import React from 'react'
import styles from "./card3d.module.css"
import { Box, Center, Flex, keyframes } from "@chakra-ui/react";

export default function Cube3d() {
	return (


	<Box   w={300} h={300} >
		<div className={styles.container}>
			<div className={styles.cube}>
				<div style={{ '--x': -1, '--y': 0 }}>
					<span style={{ '--i': 3 }}>Alura</span>
					<span style={{ '--i': 2 }}>Alura</span>
					<span style={{ '--i': 1 }}>Alura</span>
				</div>
				<div style={{ '--x': 0, '--y': 0 }}>
					<span style={{ '--i': 3 }}>Alura</span>
					<span style={{ '--i': 2 }}>Alura</span>
					<span style={{ '--i': 1 }}>Alura</span>
				</div>
				<div style={{ '--x': 1, '--y': 0 }}>
					<span style={{ '--i': 3 }}>Alura</span>
					<span style={{ '--i': 2 }}>Alura</span>
					<span style={{ '--i': 1 }}>Alura</span>
				</div>
			</div>

			<div className={styles.cube}>
				<div style={{ '--x': -1, '--y': 0 }}>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 1 }}></span>
				</div>
				<div style={{ '--x': 0, '--y': 0 }}>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 1 }}></span>
				</div>
				<div style={{ '--x': 1, '--y': 0 }}>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 1 }}></span>
				</div>
			</div>
			<div className={styles.cube}>
				<div style={{ '--x': -1, '--y': 0 }}>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 1 }}></span>
				</div>
				<div style={{ '--x': 0, '--y': 0 }}>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 1 }}></span>
				</div>
				<div style={{ '--x': 1, '--y': 0 }}>
					<span style={{ '--i': 3 }}></span>
					<span style={{ '--i': 2 }}></span>
					<span style={{ '--i': 1 }}></span>
				</div>
			</div>
			
		</div>
		</Box>

	)
}
