import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-horizontal-space-around",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 1, 0.8, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				height="10"
				rx="2"
				style={centered}
				width="6"
				x="9"
				y="7"
			/>
			<motion.path {...part(pose({ x: [0, 1.5, 0] }, { duration: 0.75, times: [0, 0.45, 1] }))} d="M4 22V2" />
			<motion.path {...part(pose({ x: [0, -1.5, 0] }, { duration: 0.75, times: [0, 0.45, 1] }))} d="M20 22V2" />
		</>
	),
});
