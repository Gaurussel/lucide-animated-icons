import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const times = [0, 0.3, 0.7, 1];

export default createAnimatedIcon({
	name: "wine-off",
	render: (part) => (
		<>
			<path d="M8 22h8" />
			<motion.g
				{...part(pose({ rotate: [0, -8, 5, 0], opacity: [1, 0.35, 0.35, 1] }, { duration: 0.85, times }))}
				style={pivot(12, 22)}
			>
				<path d="M7 10h3m7 0h-1.343" />
				<path d="M12 15v7" />
				<path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
			</motion.g>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.3, 0.5, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
		</>
	),
});
