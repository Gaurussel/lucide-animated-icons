import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const spring = pose({ y: [0, 1.5, 0] }, { duration: 0.72, times: [0, 0.14, 1], ease: [snap, ring] });
const launch = (at: number, rotate: number) =>
	pose(
		{ y: [0, 0, -3, 0], rotate: [0, 0, rotate, 0] },
		{ duration: 0.72, times: [0, at, at + 0.18, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "whole-word",
	render: (part) => (
		<>
			<motion.g {...part(launch(0.12, -12))} style={pivot(7, 15)}>
				<circle cx="7" cy="12" r="3" />
				<path d="M10 9v6" />
			</motion.g>
			<motion.g {...part(launch(0.2, 12))} style={pivot(17, 15)}>
				<circle cx="17" cy="12" r="3" />
				<path d="M14 7v8" />
			</motion.g>
			<motion.path {...part(spring)} d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
		</>
	),
});
