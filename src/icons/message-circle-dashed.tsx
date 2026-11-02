import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-dashed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 40, 40, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" />
				<path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" />
				<path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" />
				<path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" />
				<path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" />
				<path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" />
				<path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, -1, 0, 0], y: [0, 1, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M3.5 17.5 2 22l4.5-1.5"
			/>
		</>
	),
});
