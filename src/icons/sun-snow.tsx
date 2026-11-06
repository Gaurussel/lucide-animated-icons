import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flurry = pose({ rotate: [0, -15, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] });
const shine = (delay: number) =>
	pose(
		{ scale: [1, 0.4, 1.36, 1] },
		{ duration: 0.55, delay, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "sun-snow",
	render: (part) => (
		<>
			<motion.path {...part(shine(0.1))} d="M10 21v-1" style={centered} />
			<motion.path {...part(shine(0.1))} d="M10 4V3" style={centered} />
			<motion.path {...part(redraw(0, 0.45))} d="M10 9a3 3 0 0 0 0 6" />
			<motion.path {...part(shine(0.16))} d="M2 12h1" style={centered} />
			<motion.path {...part(shine(0.2))} d="m3.64 18.36.7-.7" style={centered} />
			<motion.path {...part(shine(0.2))} d="m4.34 6.34-.7-.7" style={centered} />
			<motion.g {...part(flurry)} style={pivot(16, 12)}>
				<path d="m14 20 1.25-2.5L18 18" />
				<path d="m14 4 1.25 2.5L18 6" />
				<path d="m17 21-3-6 1.5-3H22" />
				<path d="m17 3-3 6 1.5 3" />
				<path d="m20 10-1.5 2 1.5 2" />
			</motion.g>
		</>
	),
});
