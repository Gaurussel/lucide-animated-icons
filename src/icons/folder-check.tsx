import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -9, 0, 0], opacity: [1, 0, 1, 1] },
	{ duration: 0.7, times: [0, 0.08, 0.35, 1], ease: ["easeInOut", "easeIn", "easeInOut"] },
);
const absorb = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.7, times: [0, 0.33, 0.43, 1], ease: ["easeInOut", snap, springy] },
);
const stamp = pose(
	{ scale: [1, 1, 1.4, 1] },
	{ duration: 0.7, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-check",
	render: (part) => (
		<motion.g {...part(absorb)}>
			<motion.path
				{...part(jelly(0.36, 0.7))}
				d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(drop)}>
				<motion.g {...part(stamp)} style={pivot(12, 13)}>
					<motion.path {...part(redraw(0.4, 0.3))} d="m9 13 2 2 4-4" />
				</motion.g>
			</motion.g>
		</motion.g>
	),
});
