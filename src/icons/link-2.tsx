import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.35, 0.6, 1] };

export default createAnimatedIcon({
	name: "link-2",
	render: (part) => (
		<>
			<motion.path {...part(pose({ x: [0, -2.5, -2.5, 0] }, timing))} d="M9 17H7A5 5 0 0 1 7 7h2" />
			<motion.path {...part(pose({ x: [0, 2.5, 2.5, 0] }, timing))} d="M15 7h2a5 5 0 1 1 0 10h-2" />
			<motion.line
				{...part(pose({ scaleX: [1, 1.3, 1.3, 1] }, timing))}
				style={centered}
				x1="8"
				x2="16"
				y1="12"
				y2="12"
			/>
		</>
	),
});
