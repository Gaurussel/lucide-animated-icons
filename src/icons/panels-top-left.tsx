import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const timing = { duration: 0.8, times: [0, 0.35, 0.65, 1] };

export default createAnimatedIcon({
	name: "panels-top-left",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.92, 0.92, 1] }, timing))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path {...part(pose({ y: [0, -4, -4, 0] }, timing))} d="M3 9h18" />
			<motion.path {...part(pose({ scaleY: [1, 1.33, 1.33, 1] }, timing))} d="M9 21V9" style={edge(0.5, 1)} />
		</>
	),
});
