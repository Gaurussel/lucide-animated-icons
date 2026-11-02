import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const times = [0, 0.35, 0.7, 1];
const options = { duration: 0.8, times };

export default createAnimatedIcon({
	name: "scale",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: [0, -7, 5, 0] }, options))} style={pivot(12, 5)}>
				<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -1.5, 1, 0] }, options))}
				d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, -1, 0] }, options))}
				d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
			/>
			<path d="M7 21h10" />
			<path d="M12 3v18" />
		</>
	),
});
