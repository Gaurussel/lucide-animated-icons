import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -6, -6, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] });
const sun = pose({ y: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });
const ridge = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });

export default createAnimatedIcon({
	name: "image",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 3)}>
			<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
			<motion.path {...part(ridge)} d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
		</motion.g>
	),
});
