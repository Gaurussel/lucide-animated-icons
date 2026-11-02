import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "codepen",
	render: (part) => (
		<>
			<motion.polygon
				{...part(pose({ scaleX: [1, 0.8, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
				style={centered}
			/>
			<motion.g
				{...part(pose({ scaleX: [1, 0.35, 1] }, { duration: 0.72, delay: 0.08, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<line x1="12" x2="12" y1="22" y2="15.5" />
				<polyline points="22 8.5 12 15.5 2 8.5" />
				<polyline points="2 15.5 12 8.5 22 15.5" />
				<line x1="12" x2="12" y1="2" y2="8.5" />
			</motion.g>
		</>
	),
});
