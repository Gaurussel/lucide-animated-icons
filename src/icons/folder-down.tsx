import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -4, 4, 0], opacity: [1, 1, 0.4, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: [snap, "easeIn", springy] },
);
const absorb = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.7, times: [0, 0.36, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-down",
	render: (part) => (
		<motion.g {...part(absorb)}>
			<motion.path
				{...part(jelly(0.4, 0.7))}
				d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(drop)}>
				<path d="M12 10v6" />
				<path d="m15 13-3 3-3-3" />
			</motion.g>
		</motion.g>
	),
});
