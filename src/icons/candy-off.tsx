import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "candy-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -30, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={centered}
			>
				<path d="M10 10v7.9" />
				<path d="M11.802 6.145a5 5 0 0 1 6.053 6.053" />
				<path d="M14 6.1v2.243" />
				<path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0], y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 1] }))}
				d="m2 2 20 20"
			/>
			<motion.path
				{...part(pose({ x: [0, -2, -2, 0], y: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
			/>
		</>
	),
});
