import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const cross = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "monitor-x",
	render: (part) => (
		<>
			<motion.path {...part(cross(0.3))} d="m14.5 12.5-5-5" />
			<motion.path {...part(cross(0.15))} d="m9.5 12.5 5-5" />
			<motion.rect
				{...part(pose({ scaleY: [1, 0.75, 1, 1] }, { duration: 0.6, times: [0, 0.3, 0.6, 1] }))}
				height="14"
				rx="2"
				style={edge(0.5, 1)}
				width="20"
				x="2"
				y="3"
			/>
			<path d="M12 17v4" />
			<path d="M8 21h8" />
		</>
	),
});
