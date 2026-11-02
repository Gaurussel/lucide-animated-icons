import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.35, 0.6, 1];
const options = { duration: 0.75, times };

export default createAnimatedIcon({
	name: "variable",
	render: (part) => (
		<>
			<motion.path {...part(pose({ x: [0, 1.5, 1.5, 0] }, options))} d="M8 21s-4-3-4-9 4-9 4-9" />
			<motion.path {...part(pose({ x: [0, -1.5, -1.5, 0] }, options))} d="M16 3s4 3 4 9-4 9-4 9" />
			<motion.g {...part(pose({ scale: [1, 1.3, 1.3, 1], rotate: [0, -45, -45, 0] }, options))} style={centered}>
				<line x1="15" x2="9" y1="9" y2="15" />
				<line x1="9" x2="15" y1="9" y2="15" />
			</motion.g>
		</>
	),
});
