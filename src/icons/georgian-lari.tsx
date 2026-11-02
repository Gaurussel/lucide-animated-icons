import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const flip = pose({ scaleX: [1, 0.1, 0.1, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "georgian-lari",
	render: (part) => (
		<>
			<motion.g {...part(flip)} style={centered}>
				<path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
				<path d="M13 12V3" />
				<path d="M9 12V3" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M4 21h16"
				style={centered}
			/>
		</>
	),
});
