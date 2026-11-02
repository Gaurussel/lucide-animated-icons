import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mars",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, -1, 3, 0], y: [0, 1, -3, 0] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}
			>
				<path d="M16 3h5v5" />
				<path d="m21 3-6.75 6.75" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.9, 0.9, 1] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="14"
				r="6"
				style={centered}
			/>
		</>
	),
});
