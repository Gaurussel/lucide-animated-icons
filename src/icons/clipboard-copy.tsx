import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const clip = pose({ y: [0, -3.5, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const board = pose({ rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const fly = (x: number) =>
	pose(
		{ x: [0, -x * 0.25, x, -x, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "clipboard-copy",
	render: (part) => (
		<>
			<motion.g {...part(board)} style={pivot(12, 22)}>
				<motion.rect {...part(clip)} height="4" rx="1" ry="1" width="8" x="8" y="2" />
				<path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v4" />
			</motion.g>
			<motion.g {...part(fly(-7))}>
				<path d="M21 14H11" />
				<path d="m15 10-4 4 4 4" />
			</motion.g>
		</>
	),
});
