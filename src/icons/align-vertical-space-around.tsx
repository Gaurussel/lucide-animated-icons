import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-vertical-space-around",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.8, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				height="6"
				rx="2"
				style={centered}
				width="10"
				x="7"
				y="9"
			/>
			<motion.path {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.75, times: [0, 0.45, 1] }))} d="M22 20H2" />
			<motion.path {...part(pose({ y: [0, 1.5, 0] }, { duration: 0.75, times: [0, 0.45, 1] }))} d="M22 4H2" />
		</>
	),
});
