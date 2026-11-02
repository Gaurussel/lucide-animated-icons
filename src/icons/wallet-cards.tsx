import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.3, 0.65, 1];

export default createAnimatedIcon({
	name: "wallet-cards",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.95, 0.95, 1] }, { duration: 0.8, times }))}
				height="18"
				rx="2"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times }))}
				d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, 1.5, 0] }, { duration: 0.8, times }))}
				d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
			/>
		</>
	),
});
