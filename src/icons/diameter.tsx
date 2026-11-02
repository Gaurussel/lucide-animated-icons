import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const reach = (d: number, delay: number) =>
	pose({ x: [0, d, 0], y: [0, d, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const open = (d: number) =>
	pose(
		{ x: [0, 0, d, 0], y: [0, 0, -d, 0] },
		{ duration: 0.75, times: [0, 0.25, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);
const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "diameter",
	render: (part) => (
		<>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<motion.path {...part(open(2))} d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
				<motion.path {...part(open(-2))} d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
			</motion.g>
			<motion.path {...part(redraw(0, 0.4))} d="m6.41 6.41 11.18 11.18" />
			<motion.circle {...part(reach(-3.5, 0.05))} cx="5" cy="5" r="2" />
			<motion.circle {...part(reach(3.5, 0.12))} cx="19" cy="19" r="2" />
		</>
	),
});
