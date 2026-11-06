import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const yank = pose(
	{ x: [0, 0.6, -2.4, 0], y: [0, 0, 0.6, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const follow = pose(
	{ rotate: [0, 0, -10.8, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "undo",
	render: (part) => (
		<>
			<motion.path {...part(yank)} d="M3 7v6h6" />
			<motion.path {...part(follow)} d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" style={pivot(21, 17)} />
		</>
	),
});
