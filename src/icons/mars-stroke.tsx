import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mars-stroke",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, -1, 3, 0], y: [0, 1, -3, 0] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}
			>
				<path d="m14 6 4 4" />
				<path d="M17 3h4v4" />
				<path d="m21 3-7.75 7.75" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.9, 0.9, 1] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}
				cx="9"
				cy="15"
				r="6"
				style={centered}
			/>
		</>
	),
});
