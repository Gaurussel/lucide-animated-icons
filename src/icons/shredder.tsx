import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, ring, snap, springy } from "../helpers.ts";

const feed = pose(
	{ y: [0, -1.5, 4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);
const strip = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1, 1], y: [0, 0, 3, 0] },
		{ duration: 0.5, delay, times: [0, 0.01, 0.4, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "shredder",
	render: (part) => (
		<>
			<motion.g {...part(feed)}>
				<path d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9" />
				<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			</motion.g>
			<motion.path {...part(jelly(0.35, 0.7))} d="M2 13h20" style={centered} />
			<motion.path {...part(strip(0.2))} d="M6 20v-3" />
			<motion.path {...part(strip(0.25))} d="M10 22v-5" />
			<motion.path {...part(strip(0.3))} d="M14 19v-2" />
			<motion.path {...part(strip(0.35))} d="M18 20v-3" />
		</>
	),
});
