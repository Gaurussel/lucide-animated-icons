import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const seal = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay, times: [0, 0.3, 1] });

export default createAnimatedIcon({
	name: "box",
	render: (part) => (
		<motion.g
			{...part(pose({ y: [0, -3, 0, 0], scaleY: [1, 1, 0.9, 1] }, { duration: 0.75, times: [0, 0.35, 0.55, 1] }))}
			style={edge(0.5, 1)}
		>
			<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
			<motion.path {...part(seal(0.3))} d="m3.3 7 8.7 5 8.7-5" />
			<motion.path {...part(seal(0.38))} d="M12 22V12" />
		</motion.g>
	),
});
