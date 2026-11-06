import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -3, 0.3, 0], rotate: [0, -4.8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const play = pose(
	{ x: [0, 0, 1.2, 0], scale: [1, 1, 1.24, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "monitor-play",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<rect height="14" rx="2" width="20" x="2" y="3" />
				<motion.path
					{...part(play)}
					d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
					style={centered}
				/>
			</motion.g>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M12 17v4" />
				<path d="M8 21h8" />
			</motion.g>
		</>
	),
});
