import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const rock = pose({ rotate: [0, -18, 0] }, { duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] });
const shine = (delay: number) =>
	pose(
		{ scale: [1, 0.4, 1.24, 1] },
		{ duration: 0.55, delay, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "sun-moon",
	render: (part) => (
		<>
			<motion.path {...part(shine(0.1))} d="M12 2v2" style={centered} />
			<motion.path {...part(redraw(0.15, 0.4))} d="M13 8.129A4 4 0 0 1 15.873 11" />
			<motion.path {...part(shine(0.15))} d="m19 5-1.256 1.256" style={centered} />
			<motion.path {...part(shine(0.2))} d="M20 12h2" style={centered} />
			<motion.path {...part(rock)} d="M9 8a5 5 0 1 0 7 7 7 7 0 1 1-7-7" style={pivot(10, 14)} />
		</>
	),
});
