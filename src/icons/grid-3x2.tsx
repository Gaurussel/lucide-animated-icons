import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const line = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });

export default createAnimatedIcon({
	name: "grid-3x2",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path {...part(line(0))} d="M9 3v18" />
			<motion.path {...part(line(0.1))} d="M15 3v18" />
			<motion.path {...part(line(0.2))} d="M3 12h18" />
		</>
	),
});
