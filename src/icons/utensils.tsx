import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const strike = pose(
	{ rotate: [0, -3.6, 9.6, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.26, 1], ease: ["easeInOut", snap, springy] },
);
const struck = pose(
	{ rotate: [0, 0, 8.4, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.36, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "utensils",
	render: (part) => (
		<>
			<motion.g {...part(strike)} style={pivot(7, 22)}>
				<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
				<path d="M7 2v20" />
			</motion.g>
			<motion.path {...part(struck)} d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" style={pivot(21, 22)} />
		</>
	),
});
