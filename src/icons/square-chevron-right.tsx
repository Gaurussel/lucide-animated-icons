import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "square-chevron-right",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 1, 0.94, 1, 1] }, { duration: 0.7, times }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path {...part(pose({ x: [0, -1, 2.5, 2.5, 0] }, { duration: 0.7, times }))} d="m10 8 4 4-4 4" />
		</>
	),
});
