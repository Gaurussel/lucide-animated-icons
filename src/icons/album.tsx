import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const pull = pose(
	{ y: [0, 2.4, -0.6, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
);
const sway = pose(
	{ rotate: [0, 0, -3.6, 0] },
	{ duration: 0.72, times: [0, 0.36, 0.46, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "album",
	render: (part) => (
		<>
			<motion.g {...part(sway)} style={pivot(12, 21)}>
				<motion.rect
					{...part(jelly(0.4, 0.72))}
					height="18"
					rx="2"
					ry="2"
					style={edge(0.5, 1)}
					width="18"
					x="3"
					y="3"
				/>
			</motion.g>
			<motion.g {...part(pull)}>
				<polyline points="11 3 11 11 14 8 17 11 17 3" />
			</motion.g>
		</>
	),
});
