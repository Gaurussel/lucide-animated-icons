import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -5, 0.5, 0], rotate: [0, -8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const drop = pose({ y: [0, -3, 3, 0] }, { duration: 0.7, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] });

export default createAnimatedIcon({
	name: "monitor-down",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<rect height="14" rx="2" width="20" x="2" y="3" />
				<motion.g {...part(drop)}>
					<path d="M12 13V7" />
					<path d="m15 10-3 3-3-3" />
				</motion.g>
			</motion.g>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M12 17v4" />
				<path d="M8 21h8" />
			</motion.g>
		</>
	),
});
