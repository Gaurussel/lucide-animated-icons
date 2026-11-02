import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const line = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay, times: [0, 0.25, 0.45, 1] });

export default createAnimatedIcon({
	name: "table",
	render: (part) => (
		<>
			<motion.path {...part(line(0.2))} d="M12 3v18" />
			<motion.rect
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path {...part(line(0))} d="M3 9h18" />
			<motion.path {...part(line(0.1))} d="M3 15h18" />
		</>
	),
});
