import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const roll = pose(
	{ rotate: [0, -25, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const chip = (delay: number) =>
	pose({ scale: [1, 2, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cookie",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(12, 12)}>
			<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
			<motion.path {...part(chip(0.1))} d="M8.5 8.5v.01" style={centered} />
			<motion.path {...part(chip(0.15))} d="M12 12v.01" style={centered} />
			<motion.path {...part(chip(0.2))} d="M7 14v.01" style={centered} />
			<motion.path {...part(chip(0.25))} d="M11 17v.01" style={centered} />
			<motion.path {...part(chip(0.3))} d="M16 15.5v.01" style={centered} />
		</motion.g>
	),
});
