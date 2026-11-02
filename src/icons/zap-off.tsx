import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.45, 0.7, 1];

export default createAnimatedIcon({
	name: "zap-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, -1, 1, -0.5, 0], opacity: [1, 0.3, 1, 0.3, 1] }, { duration: 0.8, times }))}
			>
				<path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" />
				<path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" />
				<path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
