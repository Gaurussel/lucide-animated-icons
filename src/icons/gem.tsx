import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.2, 0.35, 0.7, 1] };

export default createAnimatedIcon({
	name: "gem",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.94, 0.94, 1, 1] }, phase))}
				d="M6 3h12l4 6-10 13L2 9Z"
				style={centered}
			/>
			<motion.path {...part(pose({ pathLength: [1, 1, 0, 1, 1] }, phase))} d="M11 3 8 9l4 13 4-13-3-6" />
			<motion.path {...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { ...phase, delay: 0.1 }))} d="M2 9h20" />
		</>
	),
});
