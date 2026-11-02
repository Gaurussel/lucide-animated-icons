import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const flag = pose(
	{ rotate: [0, 12, -85, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const door = pose(
	{ scaleX: [1, 1, -0.6, 1] },
	{ duration: 0.75, times: [0, 0.08, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "mailbox",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.32, 0.75))} style={edge(0.5, 1)}>
				<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
				<motion.g {...part(door)} style={pivot(11, 12)}>
					<path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
					<line x1="6" x2="7" y1="10" y2="10" />
				</motion.g>
			</motion.g>
			<motion.polyline {...part(flag)} points="15,9 18,9 18,11" style={pivot(18, 11)} />
		</>
	),
});
