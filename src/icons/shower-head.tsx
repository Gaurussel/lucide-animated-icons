import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose({ rotate: [0, -12, 0] }, { duration: 0.72, times: [0, 0.2, 1], ease: [snap, ring] });
const drip = (delay: number) =>
	pose(
		{ x: [0, 4, -2, 0], y: [0, 4, -2, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.62, delay, times: [0, 0.4, 0.41, 1], ease: ["easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "shower-head",
	render: (part) => (
		<>
			<motion.g {...part(tilt)} style={pivot(4, 4)}>
				<path d="m4 4 2.5 2.5" />
				<path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
				<path d="M15 5 5 15" />
			</motion.g>
			<motion.path {...part(drip(0.04))} d="M14 17v.01" />
			<motion.path {...part(drip(0))} d="M10 16v.01" />
			<motion.path {...part(drip(0))} d="M13 13v.01" />
			<motion.path {...part(drip(0))} d="M16 10v.01" />
			<motion.path {...part(drip(0.08))} d="M11 20v.01" />
			<motion.path {...part(drip(0.08))} d="M17 14v.01" />
			<motion.path {...part(drip(0.04))} d="M20 11v.01" />
		</>
	),
});
