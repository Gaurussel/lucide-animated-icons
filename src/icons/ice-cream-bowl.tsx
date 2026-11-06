import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const toss = (delay: number, spin: number, x: number, y: number) => ({
	variants: pose(
		{ y: [0, -3.6, 0], rotate: [0, spin, 0] },
		{ duration: 0.55, delay, times: [0, 0.35, 1], ease: [snap, springy] },
	),
	style: pivot(x, y),
});
const catchBowl = pose(
	{ y: [0, 0, 1.2, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "ice-cream-bowl",
	render: (part) => {
		const right = toss(0, 30, 15.5, 11);
		const top = toss(0.1, -30, 12, 6.5);
		return (
			<>
				<motion.g {...part(catchBowl)}>
					<motion.path
						{...part(jelly(0.45, 0.75))}
						d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
						style={edge(0.5, 1)}
					/>
				</motion.g>
				<motion.path {...part(right.variants)} d="M12.14 11a3.5 3.5 0 1 1 6.71 0" style={right.style} />
				<motion.path {...part(top.variants)} d="M15.5 6.5a3.5 3.5 0 1 0-7 0" style={top.style} />
			</>
		);
	},
});
