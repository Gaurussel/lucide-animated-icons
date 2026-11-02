import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.3, 0.7, 1];

export default createAnimatedIcon({
	name: "worm",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 1.5, 1.5, 0], rotate: [0, -5, 4, 0] }, { duration: 0.85, times }))}
				style={centered}
			>
				<path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" />
			</motion.g>
			<motion.path {...part(pose({ y: [0, -1.2, 0] }, { duration: 0.5, delay: 0.1 }))} d="m19 12-1.5 3" />
			<motion.path {...part(pose({ y: [0, -1.2, 0] }, { duration: 0.5, delay: 0.25 }))} d="M19.63 18.81 22 20" />
		</>
	),
});
