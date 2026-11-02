import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.25, 0.55, 1] };

export default createAnimatedIcon({
	name: "pin",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1.5, 1.5, 0] }, timing))}>
			<motion.path {...part(pose({ scaleY: [1, 1, 0.7, 1] }, timing))} d="M12 17v5" style={edge(0.5, 0)} />
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.94, 1] }, timing))}
				d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
				style={edge(0.5, 1)}
			/>
		</motion.g>
	),
});
