import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const play = pose(
	{ x: [0, 1.2, 0], scale: [1, 1.24, 1] },
	{ duration: 0.7, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "tv-minimal-play",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.15, 0.5))} d="M7 21h10" />
			<motion.g {...part(lift)} style={pivot(12, 17)}>
				<motion.path
					{...part(play)}
					d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
					style={centered}
				/>
				<rect height="14" rx="2" width="20" x="2" y="3" />
			</motion.g>
		</>
	),
});
