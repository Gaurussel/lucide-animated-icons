import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const stud = (rotate: number, delay: number) =>
	pose(
		{ y: [0, -3, 0], rotate: [0, rotate, 0] },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);
const follow = pose(
	{ y: [0, 0, -1.8, 0, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.3, 0.45, 1], ease: ["easeInOut", snap, "easeIn", "easeInOut"] },
);

export default createAnimatedIcon({
	name: "toy-brick",
	render: (part) => (
		<motion.g {...part(follow)}>
			<motion.rect {...part(jelly(0.45, 0.7))} height="12" rx="1" style={edge(0.5, 1)} width="18" x="3" y="8" />
			<motion.path {...part(stud(-25, 0))} d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" style={pivot(7.5, 8)} />
			<motion.path
				{...part(stud(25, 0.08))}
				d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
				style={pivot(16.5, 8)}
			/>
		</motion.g>
	),
});
