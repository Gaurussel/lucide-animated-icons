import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "square-chevron-down",
	render: (part) => (
		<>
			<motion.path {...part(pose({ y: [0, -1, 2.5, 2.5, 0] }, { duration: 0.7, times }))} d="m16 10-4 4-4-4" />
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.94, 1, 1] }, { duration: 0.7, times }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
		</>
	),
});
