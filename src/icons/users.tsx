import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.2, 0.55, 1];

export default createAnimatedIcon({
	name: "users",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.75, times }))}
				d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(pose({ y: [0, 0.8, -2, 0] }, { duration: 0.75, delay: 0.12, times }))}>
				<path d="M16 3.128a4 4 0 0 1 0 7.744" />
				<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			</motion.g>
			<motion.circle {...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.75, times }))} cx="9" cy="7" r="4" />
		</>
	),
});
