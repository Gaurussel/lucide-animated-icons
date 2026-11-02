import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "popsicle",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(22, 22)}
			>
				<motion.path
					{...part(pose({ scale: [1, 1, 0.9, 1] }, { duration: 0.9, times: [0, 0.4, 0.7, 1] }))}
					d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
					style={edge(1, 1)}
				/>
				<path d="m22 22-5.5-5.5" />
			</motion.g>
		</>
	),
});
